import { simpleParser } from "mailparser";
import emails from "./emails.js";

const email = emails[1];

function extractRideDetails(emailContent) {
  // Use regular expressions to capture ride details
  const distanceRegex = /Lyft fare \((\d+\.\d+mi).*?\)/;
  const dropoffRegex =
    /Drop-off\s*(\d{1,2}:\d{2}\s*[AP]M)\s*(.+?)(?=(Tip driver|Find lost item|Request review|$))/;
  const totalFareRegex = /Total\s*\$([\d\.]+)/;

  const details = {
    distance: "",
    dropoffTime: "",
    dropoffLocation: "",
    totalFare: "",
  };

  // Extract distance
  const distanceMatch = emailContent.match(distanceRegex);
  if (distanceMatch) {
    details.distance = distanceMatch[1];
  }

  // Extract drop-off time and location
  const dropoffMatch = emailContent.match(dropoffRegex);
  if (dropoffMatch) {
    details.dropoffTime = dropoffMatch[1];
    details.dropoffLocation = dropoffMatch[2].trim(); // Trim any surrounding whitespace
  }

  // Extract total fare
  const totalFareMatch = emailContent.match(totalFareRegex);
  if (totalFareMatch) {
    details.totalFare = totalFareMatch[1];
  }

  return details;
}

// Example usage with a sample email content (make sure the email content is plain text).
const emailContent = `Lyft fare (18.87mi, 35m 13s) $24.27
Drop-off  1:09 PM
11515 Maddie Ave, Keller, TX`;

const rideDetails = extractRideDetails(emailContent);
console.log(rideDetails);

async function main() {
  try {
    const emailContent = email; // Your Lyft email content goes here

    // Define regex patterns
    const fareRegex = /\*\s*\$([\d.]+)\s*\*/;
    const distanceRegex = /fare\s*\(([\d.]+mi),/;
    const pickupRegex = /Pickup\s+\d{1,2}:\d{2}\s+[APM]{2}\n\s*(.+?)\n/;
    const dropoffRegex = /Drop-off\s+\d{1,2}:\d{2}\s+[APM]{2}\n\s*(.+?)\n/;

    // Execute regex on email content
    const totalFareMatch = emailContent.match(fareRegex);
    const distanceMatches = distanceRegex.exec(emailContent);
    const pickupMatches = emailContent.match(pickupRegex);
    const dropoffMatches = emailContent.match(dropoffRegex);

    console.log({ pickupMatches, dropoffMatches });

    // Extracted information
    const totalFare = totalFareMatch ? totalFareMatch[1] : null;
    const distanceMiles = distanceMatches ? distanceMatches[1] : null;
    const pickupLocation = pickupMatches ? pickupMatches[1].trim() : null;
    const dropoffLocation = dropoffMatches ? dropoffMatches[1].trim() : null;

    // Log results
    console.log("Total Fare:", totalFare);
    console.log("Distance (miles):", distanceMiles);
    console.log("Pickup Location:", pickupLocation);
    console.log("Drop-off Location:", dropoffLocation);
  } catch (err) {
    console.error("Error parsing email:", err);
  }
}

main();
