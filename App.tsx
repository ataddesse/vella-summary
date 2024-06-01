import { View, StyleSheet, Text, Button } from "react-native";
import DocumentPicker from "react-native-document-picker";
import { initLlama } from "llama.rn";
import React, { useState } from "react";

async function pickModelFile() {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    return res[0].uri;
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      console.log("User cancelled the picker");
    } else {
      console.error(err);
    }
    return null;
  }
}

async function init(modelUri) {
  try {
    // Initialize a Llama context with the model (may take a while)
    const context = await initLlama({
      model: modelUri,
      use_mlock: true,
      n_ctx: 2048,
      n_gpu_layers: 0, // > 0: enable Metal on iOS
      // embedding: true, // use embedding
    });

    console.log("Llama context initialized:", context);

    // Do completion
    const { text, timings } = await context.completion(
      {
        prompt:
          "This is a conversation between user and llama, a friendly chatbot. respond in simple markdown.\n\nUser: Hello!\nLlama:",
        n_predict: 100,
        stop: ["</s>", "Llama:", "User:"],
        // n_threads: 4,
      },
      (data) => {
        // This is a partial completion callback
        const { token } = data;
        console.log({ token });
      },
    );

    console.log("Result:", text);
    console.log("Timings:", timings);
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

export default function App() {
  const [modelUri, setModelUri] = useState(null);

  const handlePickModel = async () => {
    const uri = await pickModelFile();
    if (uri) {
      setModelUri(uri);
      await init(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button title="Pick Model File" onPress={handlePickModel} />
      {modelUri && <Text>Model loaded from: {modelUri}</Text>}
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
