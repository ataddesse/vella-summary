import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import { initLlama } from "llama.rn";

export default function App() {
  const [modelUri, setModelUri] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState([]);
  const [context, setContext] = useState(null);

  const handlePickModel = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (res && res.length > 0) {
        setModelUri(res[0].uri);
        await init(res[0].uri);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the picker");
      } else {
        console.error(err);
      }
    }
  };

  const handlePromptSubmit = async () => {
    if (context) {
      const userMessage = `User: ${prompt}`;
      setConversation([...conversation, { sender: "User", text: prompt }]);
      setPrompt("");

      const { text } = await context.completion(
        {
          prompt: `${userMessage}\nLlama:`,
          n_predict: 100,
          stop: ["</s>", "Llama:", "User:"],
        },
        (data) => {
          const { token } = data;
          console.log({ token });
        },
      );

      setConversation((prev) => [...prev, { sender: "Llama", text }]);
    } else {
      console.error("Llama context is not initialized");
    }
  };

  const init = async (modelUri) => {
    try {
      const context = await initLlama({
        model: modelUri,
        use_mlock: true,
        n_ctx: 2048,
        n_gpu_layers: 0,
      });
      setContext(context);
    } catch (error) {
      console.error("Initialization error:", error);
    }
  };

  return (
    <View style={styles.container}>
      {!modelUri ? (
        <Button title="Pick Model File" onPress={handlePickModel} />
      ) : (
        <>
          <Text>Model loaded from: {modelUri}</Text>
          <TextInput
            style={styles.input}
            value={prompt}
            onChangeText={setPrompt}
            placeholder="Enter your message"
          />
          <Button title="Send" onPress={handlePromptSubmit} />
          <ScrollView style={styles.conversation}>
            {conversation.map((msg, index) => (
              <Text
                key={index}
                style={
                  msg.sender === "User" ? styles.userText : styles.llamaText
                }
              >
                {msg.sender}: {msg.text}
              </Text>
            ))}
          </ScrollView>
        </>
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
    padding: 10,
  },
  conversation: {
    flex: 1,
    width: "100%",
    marginVertical: 10,
  },
  userText: {
    textAlign: "right",
    marginVertical: 2,
    backgroundColor: "#daf7a6",
    padding: 5,
    borderRadius: 5,
  },
  llamaText: {
    textAlign: "left",
    marginVertical: 2,
    backgroundColor: "#f0e68c",
    padding: 5,
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
