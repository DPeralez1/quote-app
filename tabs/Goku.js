import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Share,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useEffect, useState } from "react";

export default function Goku() {
  const [character, setCharacter] = useState("Loading...");
  const [quote, setQuote] = useState("Loading...");
  const [loading, setLoading] = useState(false);

  const randomQuote = () => {
    setLoading(true);
    fetch("https://animechan.xyz/api/random/character?name=goku")
      .then((response) => response.json())
      .then((result) => {
        setQuote(result.quote);
        setCharacter(result.character);
        setLoading(false);
      });
  };

  useEffect(() => {
    randomQuote(); // Trigger random quote when component mounts
  }, []);

  const shareQuote = (quote, character) => {
    Share.share({
      quote,
      message: `"${quote}" --${character}`,
    });
  };

  // const copyToClipboard = () => {
  //   Clipboard.setString(quote);
  //   Snackbar.show({
  //     text: "Quote copied!",
  //     duration: Snackbar.LENGTH_SHORT,
  //   });
  // };

  // const tweetNow = () => {
  //   const url = "https://twitter.com/intent/tweet?text=" + quote;
  //   Linking.openURL(url);
  // };

  return (
    <View className="flex-1 justify-center items-center #cbd5e1">
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Earths Mightiest</Text>
        <FontAwesome5
          name="quote-left"
          style={{ fontSize: 20, marginBottom: -12 }}
          color="#000"
        />
        <Text style={styles.quote}>{quote}</Text>
        <FontAwesome5
          name="quote-right"
          style={{
            fontSize: 20,
            textAlign: "right",
            marginTop: -20,
            marginBottom: 20,
          }}
          color="#000"
        />
        <Text style={styles.character}>-- {character}</Text>
        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: loading
              ? "rgba(21, 94, 117, 0.7)"
              : "rgba(21, 94, 117, 1)",
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
            {loading ? "Loading..." : "New Quote"}
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => {}} style={styles.icons}>
            <FontAwesome5 name="volume-up" size={22} color="#155E75" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.icons}>
            <FontAwesome5 name="copy" size={22} color="#155E75" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => shareQuote(quote, character)}
            style={styles.icons}
          >
            <FontAwesome5 name="share" size={22} color="#155E75" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    borderWidth: 2,
    borderColor: "#155E75",
    borderRadius: 50,
    padding: 15,
  },
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  quote: {
    color: "#000",
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.5,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  character: {
    textAlign: "right",
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 16,
    color: "#000",
  },
});
