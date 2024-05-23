import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import emails from "./emails.js";

const sourcePattern = /(Lyft|Uber)/;

const emailDataRegex = {
  lyft: {
    total: /Lyft fare.*?\$([\d\.]+)/,

    pickup: /Pickup\s+\d{1,2}:\d{2}\s+[AP]M\s+([^,]+,\s*[^,]+,\s*\w{2})/,

    dropoff: /\d{4,}\s[\w\s]+,\s[\w\s]+,\s[A-Z]{2}\s\d{5},\s[A-Z]{2}/,

    distance: /Lyft fare\s+\(([\d\.]+)mi/,
  },
  uber: {
    total: /Total \$([0-9]+\.[0-9]{2})/,
    location:
      /(\d{1,2}:\d{2} [AP]M)\n([\d\w\s,]+),\s*([\w\s]+), ([A-Z]{2}) (\d{5}), ([A-Z]{2})/g,
    distance: /UberX\s+([\d\.]+)\s+miles/,
  },
};
export default function App() {
  const [result, setResult] = React.useState({});

  function identifyEmailSource(text) {
    const match = text.match(sourcePattern);

    return match ? match[1] : "Unknown";
  }

  const extractEmailData = () => {
    const email = emails[0];

    const source = identifyEmailSource(email);

    let data = {};

    if (source === "Lyft") {
      const patterns = emailDataRegex.lyft;
      Object.keys(patterns).forEach((key) => {
        const regex = patterns[key];

        const match = email.match(regex);

        if (match) {
          data[key] = match[1];
        }
      });
    } else if (source === "Uber") {
      const patterns = emailDataRegex.uber;

      const location = email.match(patterns.location);
      console.log(location);
      if (location) {
        data.pickup = location[0].split("\n")[1];
        data.dropoff = location[1].split("\n")[1];
      }

      data.total = email.match(patterns.total)[1];

      data.distance = email.match(patterns.distance)[1];
    }

    console.log(data);

    setResult(data);
  };

  return (
    <View style={styles.container}>
      <Button title="Extract Email Data" onPress={extractEmailData} />
      <StatusBar style="auto" />
      <Text>Result : {JSON.stringify(result, null, 2)}</Text>
      <Text>
        {result.total
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
