import React from "react";
import { StyleSheet, Share, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Buttons() {
  const shareQuote = (quote, character) => {
    Share.share({
      quote,
      message: `"${quote}" --${character}`,
    });
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  icons: {
    borderWidth: 2,
    borderColor: "#155E75",
    borderRadius: 50,
    padding: 15,
  },
});
