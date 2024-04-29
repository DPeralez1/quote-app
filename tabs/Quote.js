import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://animechan.xyz/api/random/character?name=vegeta")
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setIsLoading(false);
      });
  }, []); // empty dependency array means this effect runs once when component mounts

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : quote ? (
        <Text>
          {quote.character} says: {quote.quote}
        </Text>
      ) : (
        <Text>Failed to fetch quote.</Text>
      )}
      <StatusBar style="auto" />
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
