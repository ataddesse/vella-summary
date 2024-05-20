import { Asset } from "expo-asset";
import * as SQLite from "expo-sqlite";
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

const emails: Email[] = [
  {
    messageId: "001",
    Labels: ["inbox", "receipts"],
    Snippet: "Your ride with Yellow Cabs has been completed...",
    From: "receipts@yellowcabs.com",
    Subject: "Your Yellow Cabs Ride Receipt",
    Body: "Dear Customer,\n\nThank you for riding with Yellow Cabs. Your ride from 123 Main St to 456 Elm St has been completed. The total fare is $25.00.\n\nBest Regards,\nYellow Cabs",
  },
  {
    messageId: "002",
    Labels: ["inbox", "receipts"],
    Snippet: "Thank you for choosing Blue Taxi Service...",
    From: "support@bluetaxi.com",
    Subject: "Blue Taxi Service Ride Receipt",
    Body: "Hello,\n\nWe appreciate you choosing Blue Taxi Service. Your trip from 789 Oak St to 101 Pine St is now complete. The total amount charged is $30.00.\n\nSincerely,\nBlue Taxi Service",
  },
  {
    messageId: "003",
    Labels: ["inbox", "receipts"],
    Snippet: "Your trip with Green Rides has ended...",
    From: "no-reply@greenrides.com",
    Subject: "Green Rides Receipt",
    Body: "Hi,\n\nYour ride with Green Rides from 111 Maple St to 222 Cedar St has concluded. The fare for this trip is $28.50.\n\nThank you,\nGreen Rides",
  },
  {
    messageId: "004",
    Labels: ["inbox", "receipts"],
    Snippet: "Ride with Red Taxis completed successfully...",
    From: "receipts@redtaxis.com",
    Subject: "Receipt for Your Red Taxis Ride",
    Body: "Dear Valued Customer,\n\nYour recent ride with Red Taxis from 333 Birch St to 444 Spruce St has been completed. The total fare is $22.75.\n\nBest,\nRed Taxis",
  },
  {
    messageId: "005",
    Labels: ["inbox", "receipts"],
    Snippet: "Your recent journey with Silver Cabs...",
    From: "contact@silvercabs.com",
    Subject: "Silver Cabs Ride Receipt",
    Body: "Dear Customer,\n\nThank you for using Silver Cabs. Your trip from 555 Walnut St to 666 Chestnut St has been successfully completed. The total fare charged is $27.00.\n\nRegards,\nSilver Cabs",
  },
];

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

async function semanticSearch(
  query: string,
  emails: Email[],
): Promise<Email[]> {
  // Load your ONNX model as in the example you provided
  const assets = await Asset.loadAsync(require("./assets/st/model.onnx"));
  const modelUri = assets[0].localUri;
  if (!modelUri) {
    Alert.alert("failed to get model URI", `${assets[0]}`);
    return [];
  }
  const myModel = await ort.InferenceSession.create(modelUri);

  const tokenizer = loadTokenizer();
  const encodedQuery = await tokenizer.then((t) => t.tokenize(query));
  const modelInputQuery = createModelInput(encodedQuery);

  const outputQuery = await myModel.run(
    modelInputQuery["_j"],
    myModel.outputNames,
  );

  const scores: Array<[Email, number]> = [];

  for (const email of emails) {
    const encodedEmail = await tokenizer.then((t) => t.tokenize(email.Snippet));
    console.log("encoded : ", encodedEmail);
    const modelInputEmail = createModelInput(encodedEmail);

    const outputEmail = await myModel.run(
      modelInputEmail["_j"],
      myModel.outputNames,
    );

    const similarity = calculateSimilarity(outputQuery, outputEmail);
    scores.push([email, similarity]);
  }

  scores.sort((a, b) => b[1] - a[1]);

  return scores.map((score) => score[0]);
}

async function loadModel() {
  try {
    const assets = await Asset.loadAsync(require("./assets/st/model.onnx"));
    const modelUri = assets[0].localUri;
    if (!modelUri) {
      Alert.alert("failed to get model URI", `${assets[0]}`);
    } else {
      const query = "Green Rides trip receipt";
      semanticSearch(query, emails).then((similarEmails) => {
        console.log("Similar emails:");
        for (const em of similarEmails.slice(0, 10)) {
          console.log(em.Subject);
          console.log("\n");
        }
      });
    }
  } catch (e) {
    Alert.alert("failed to load model", `${e}`);
    throw e;
  }
}

function calculateSimilarity(output1, output2) {
  const embedding1 = output1["787"].cpuData;
  const embedding2 = output2["787"].cpuData;

  const dot_product = embedding1.reduce(
    (sum, val, idx) => sum + val * embedding2[idx],
    0,
  );
  const norm1 = Math.sqrt(embedding1.reduce((sum, val) => sum + val * val, 0));
  const norm2 = Math.sqrt(embedding2.reduce((sum, val) => sum + val * val, 0));

  const cosine_similarity = dot_product / (norm1 * norm2);
  return cosine_similarity;
}

async function runModel() {
  try {
    // Prepare model input data
    // Note: In real use case, you must set the inputData to the actual input values
    const inputData = new Float32Array(28 * 28);
    const feeds: Record<string, ort.Tensor> = {};
    feeds[myModel.inputNames[0]] = new ort.Tensor(inputData, [1, 1, 28, 28]);
    // Run inference session
    const fetches = await myModel.run(feeds);
    // Process output
    const output = fetches[myModel.outputNames[0]];
    if (!output) {
      Alert.alert("failed to get output", `${myModel.outputNames[0]}`);
    } else {
      Alert.alert(
        "model inference successfully",
        `output shape: ${output.dims}, output data: ${output.data}`,
      );
    }
  } catch (e) {
    Alert.alert("failed to inference model", `${e}`);
    throw e;
  }
}

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const VECTOR_SIZE = 384;
  React.useEffect(() => {
    (async () => {
      const db = await SQLite.openDatabaseAsync("Email-Vectors.db");

      // Create the email_vectors table with 1536 columns for vector components
      const createTableQuery = `
        PRAGMA journal_mode = WAL;
        DROP TABLE IF EXISTS email_vectors;

        CREATE TABLE IF NOT EXISTS email_vectors (
                  messageID TEXT PRIMARY KEY,
                  subject TEXT,
                  body TEXT,
                  ${Array.from({ length: VECTOR_SIZE }, (_, i) => `vector_component_${i + 1} REAL`).join(", ")}
                );
      `;
      await db.execAsync(createTableQuery);

      // Prepare the insert statement
      const insertQuery = `
        INSERT INTO email_vectors (messageID, subject, body, ${Array.from({ length: VECTOR_SIZE }, (_, i) => `vector_component_${i + 1}`).join(", ")})
        VALUES ($messageID, $subject, $body, ${Array.from({ length: VECTOR_SIZE }, (_, i) => `$vector_component_${i + 1}`).join(", ")});
      `;
      const statement = await db.prepareAsync(insertQuery);

      try {
        for (const email of emails) {
          const vector = await generateVector(email.Snippet);
          // Create the parameters object for the insert statement
          const params = {
            $messageID: email.messageId,
            $subject: email.Subject,
            $body: email.Body,
            ...vector.reduce((acc, val, idx) => {
              acc[`$vector_component_${idx + 1}`] = val;
              return acc;
            }, {}),
          };

          const result = await statement.executeAsync(params);
          console.log("Inserted:", result);
        }
      } catch (error) {
        console.error("Error inserting data:", error);
      } finally {
        await statement.finalizeAsync();
      }

      // Query to get the first row
      const firstRow = await db.getFirstAsync("SELECT * FROM email_vectors");
      if (firstRow) {
        console.log(
          "First row in the table:",
          JSON.stringify(firstRow, null, 2),
        );
      } else {
        console.log("No rows found in the table.");
      }
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!loading ? (
        <>
          <Text>Vella-Feed</Text>
          <Button
            title="Load model"
            onPress={() => console.log("Load model")}
          />
          <Button title="Run" onPress={() => console.log("Run model")} />
          <StatusBar style="auto" />
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
