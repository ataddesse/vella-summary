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

const VECTOR_SIZE = 384;

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

async function semanticSearch(query: string): Promise<Email[]> {
  const db = await SQLite.openDatabaseAsync("Email-Vectors.db");

  const queryVector = await generateVector(query);

  const allRows = await db.getAllAsync("SELECT * from email_vectors");

  const scores = [];

  for (const row of allRows) {
    const vector = [];

    for (let i = 1; i <= VECTOR_SIZE; i++) {
      vector.push(row[`v_${i}`]);
    }

    const similarity = calculateSimilarity(queryVector, vector);

    scores.push([{ subject: row.subject, body: row.body }, similarity]);
    scores.sort((a, b) => b[1] - a[1]);
  }

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
  const [loading, setLoading] = React.useState(true);
  const [result, setResult] = React.useState("");

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
                  ${Array.from({ length: VECTOR_SIZE }, (_, i) => `v_${i + 1} REAL`).join(", ")}
                );
      `;
      await db.execAsync(createTableQuery);

      // Prepare the insert statement
      const insertQuery = `
        INSERT INTO email_vectors (messageID, subject, body, ${Array.from({ length: VECTOR_SIZE }, (_, i) => `v_${i + 1}`).join(", ")})
        VALUES ($messageID, $subject, $body, ${Array.from({ length: VECTOR_SIZE }, (_, i) => `$v_${i + 1}`).join(", ")});
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
              acc[`$v_${idx + 1}`] = val;
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
      // const firstRow = await db.getFirstAsync("SELECT * FROM email_vectors");
      // if (firstRow) {
      //   console.log(
      //     "First row in the table:",
      //     JSON.stringify(firstRow, null, 2),
      //   );
      // } else {
      //   console.log("No rows found in the table.");
      // }
      setLoading(false);
    })();
  }, []);

  return (
    <SQLite.SQLiteProvider databaseName="Email-Vectors.db">
      <View style={styles.container}>
        {!loading ? (
          <>
            <Text>Vella-Feed</Text>
            <Button
              title="Semantic Search"
              onPress={async () => {
                const result = await semanticSearch("Red cab");
                console.log(result);
                setResult(result[0].subject);
              }}
            />
            <StatusBar style="auto" />
            <Text>Result : {result}</Text>
          </>
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    </SQLite.SQLiteProvider>
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
