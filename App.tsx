import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import emails from "./emails.js";

export default function App() {
  const [result, setResult] = React.useState({});

  function identifyEmailSource(text) {
    const sourcePattern = /(Lyft|Uber)/;
    const match = text.match(sourcePattern);
    return match ? match[1] : "Unknown";
  }

  const extractEmailData = () => {
    const email = emails[0];
    const source = identifyEmailSource(email);

    let data = {};

    if (source === "Lyft") {
      // Define regex patterns
      const fareRegex = /\*\s*\$([\d.]+)\s*\*/;
      const distanceRegex = /fare\s*\(([\d.]+mi|km|kms),/;
      const pickupRegex = /Pickup\s+\d{1,2}:\d{2}\s+[APM]{2}\n\s*(.+?)\n/;
      const dropoffRegex = /Drop-off\s+\d{1,2}:\d{2}\s+[APM]{2}\n\s*(.+?)\n/;

      // Execute regex on email content
      const totalFareMatch = email.match(fareRegex);
      const distanceMatches = email.match(distanceRegex);
      const pickupMatches = email.match(pickupRegex);
      const dropoffMatches = email.match(dropoffRegex);

      console.log({ pickupMatches, dropoffMatches });

      // Extracted information
      const totalFare = totalFareMatch ? totalFareMatch[1] : null;
      const distance = distanceMatches ? distanceMatches[1] : null;
      const pickupLocation = pickupMatches ? pickupMatches[1].trim() : null;
      const dropoffLocation = dropoffMatches ? dropoffMatches[1].trim() : null;

      data.total = totalFare;
      data.pickup = pickupLocation;
      data.dropoff = dropoffLocation;
      data.distance = distance;
    } else if (source === "Uber") {
      // Define regex pattern for the locations (including time)
      const locationPattern =
        /(\d{1,2}:\d{2}\s(?:AM|PM)\s*)([\w\s\d,.-]+),\s*([\w\s]+,\s*\w{2}\s*\d{5},\s*\w{2})/gi;

      // Define regex pattern for the fare and distance
      const farePattern = /Total\s*\$(\d+\.\d{2})/g;
      const distancePattern = /(\d+\.\d+)\s*miles/g;

      // Match patterns against the email content
      const locations = [];
      let matches;
      while ((matches = locationPattern.exec(email)) !== null) {
        const address = matches[2].trim() + matches[3].trim();
        locations.push(address);
      }

      // Extract fare
      matches = farePattern.exec(email);
      const fare = matches ? matches[1] : null;

      // Extract distance
      matches = distancePattern.exec(email);
      const distance = matches ? matches[1] : null;

      if (locations.length >= 2) {
        data.pickup = locations[0];
        data.dropoff = locations[1];
      }

      // Add fare and distance if found
      if (fare) data.total = fare;
      if (distance) data.distance = distance;
    }

    setResult(data);
  };

  return (
    <View style={styles.container}>
      <Button title="Extract Email Data" onPress={extractEmailData} />
      <StatusBar style="auto" />
      <Text>Result : {JSON.stringify(result, null, 2)}</Text>
      <Text>
        {result.total
          ? `Summary : You traveled from ${result.pickup} to ${result.dropoff}, covering a distance of ${result.distance}. The total fare was $${result.total}.`
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
