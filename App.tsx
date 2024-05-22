import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import * as ort from "onnxruntime-react-native";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { loadTokenizer } from "./assets/tokenizer/BertTokenizer";
import { createModelInput } from "./assets/tokenizer/BertProcessor";
import React from "react";

interface Email {
  messageId: string;
  Labels: string[];
  Snippet: string;
  From: string;
  Subject: string;
  Body: string;
}

const emails = [
  {
    messageId: "001",
    Labels: ["inbox", "receipts"],
    Snippet: "Your ride with Yellow Cabs has been completed...",
    From: "receipts@yellowcabs.com",
    Subject: "Your Yellow Cabs Ride Receipt",
    Body: "Dear Customer,\n\nThank you for riding with Yellow Cabs. Your ride from 123 Main St to 456 Elm St has been completed. The total fare is $25.00. Distance covered: 12 miles.\n\nBest Regards,\nYellow Cabs",
  },
  {
    messageId: "002",
    Labels: ["inbox", "receipts"],
    Snippet: "Thank you for choosing Blue Taxi Service...",
    From: "support@bluetaxi.com",
    Subject: "Blue Taxi Service Ride Receipt",
    Body: "Hello,\n\nWe appreciate you choosing Blue Taxi Service. Your trip from 789 Oak St to 101 Pine St is now complete. The total amount charged is $30.00. You traveled 8.5 km.\n\nSincerely,\nBlue Taxi Service",
  },
  {
    messageId: "003",
    Labels: ["inbox", "receipts"],
    Snippet: "Your trip with Green Rides has ended...",
    From: "no-reply@greenrides.com",
    Subject: "Green Rides Receipt",
    Body: "Hi,\n\nYour ride with Green Rides from 111 Maple St to 222 Cedar St has concluded. The fare for this trip : $28.50. Total journey distance: 7.00 miles.\n\nThank you,\nGreen Rides",
  },
  {
    messageId: "004",
    Labels: ["inbox", "receipts"],
    Snippet: "Ride with Red Taxis completed successfully...",
    From: "receipts@redtaxis.com",
    Subject: "Receipt for Your Red Taxis Ride",
    Body: "Dear Valued Customer,\n\nYour recent ride with Red Taxis from 333 Birch St to 444 Spruce St has been completed. The total fare is $22.75. Distance covered: 10 miles.\n\nBest,\nRed Taxis",
  },
  {
    messageId: "005",
    Labels: ["inbox", "receipts"],
    Snippet: "Your recent journey with Silver Cabs...",
    From: "contact@silvercabs.com",
    Subject: "Silver Cabs Ride Receipt",
    Body: "Dear Customer,\n\nThank you for using Silver Cabs. Your trip from 555 Walnut St to 666 Chestnut St has been successfully completed. The total fare charged is $27.00. Distance covered: 9.3 miles.\n\nRegards,\nSilver Cabs",
  },
];

const emailDataRegex = {
  total:
    /(?:total (?:fare|amount charged|fare charged|fare for this trip|fare is|amount charged) is|fare for this trip :) (\$|€|£)([0-9]+(?:\.[0-9]{2})?)/i,
  pickup: "from ([\\w\\s,]+) to",
  dropoff: "to ([\\w\\s,]+) ?has",
  distance:
    /(?:Distance covered:|distance covered:|You traveled|Total journey distance:|Total distance:|distance:)\s([0-9]+(?:\.[0-9]+)?)\s?(miles|km)?/i,
};

let myModel: ort.InferenceSession;
const vocabUrl = "./assets/st/vocab.json";

async function generateVector(text: string) {
  // Load your ONNX model as in the example you provided
  const assets = await Asset.loadAsync(require("./assets/st/model.onnx"));
  const modelUri = assets[0].localUri;
  if (!modelUri) {
    Alert.alert("failed to get model URI", `${assets[0]}`);
    return [];
  }
  const myModel = await ort.InferenceSession.create(modelUri);

  const tokenizer = loadTokenizer();
  const encodedData = await tokenizer.then((t) => t.tokenize(text));
  const modelInputData = createModelInput(encodedData);

  const vector = await myModel.run(modelInputData["_j"], myModel.outputNames);
  return vector["787"].cpuData;
}

async function semanticSearch(query: string, regex: any): Promise<Email[]> {
  const queryVector = await generateVector(query);

  const scores = [];

  const totalRegex = regex.total;

  for (const re of totalRegex) {
    const regexVector = await generateVector(re[0]);
    const similarity = calculateSimilarity(queryVector, regexVector);
    scores.push([re, similarity]);
    scores.sort((a, b) => b[1] - a[1]);
  }
  console.log(scores);
  return scores[0];
}

function calculateSimilarity(embedding1, embedding2) {
  const dot_product = embedding1.reduce(
    (sum, val, idx) => sum + val * embedding2[idx],
    0,
  );
  const norm1 = Math.sqrt(embedding1.reduce((sum, val) => sum + val * val, 0));
  const norm2 = Math.sqrt(embedding2.reduce((sum, val) => sum + val * val, 0));

  const cosine_similarity = dot_product / (norm1 * norm2);
  return cosine_similarity;
}

export default function App() {
  const [result, setResult] = React.useState("");

  const extractEmailData = () => {
    const email = emails[2];
    const totalMatch = email.Body.match(emailDataRegex.total);
    const pickupMatch = email.Body.match(emailDataRegex.pickup);
    const dropoffMatch = email.Body.match(emailDataRegex.dropoff);
    const distanceMatch = email.Body.match(emailDataRegex.distance);

    const extractedData = {
      total: totalMatch ? parseFloat(totalMatch[2]) : null,
      currency: totalMatch ? totalMatch[1] : null,
      pickup: pickupMatch ? pickupMatch[1].trim() : null,
      dropoff: dropoffMatch ? dropoffMatch[1].trim() : null,
      distance: distanceMatch ? parseFloat(distanceMatch[1]) : null,
      distanceUnit: distanceMatch ? distanceMatch[2] : null,
    };

    setResult(extractedData);
  };

  return (
    <View style={styles.container}>
      <Button title="Extract Email Data" onPress={extractEmailData} />
      <StatusBar style="auto" />
      <Text>Result : {JSON.stringify(result, null, 2)}</Text>
      <Text>
        {result
          ? `Summary : You traveled from ${result.pickup} to ${result.dropoff}, covering a distance of ${result.distance} ${result.distanceUnit}. The total fare was ${result.currency}${result.total}.`
          : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
