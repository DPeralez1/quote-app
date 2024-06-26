import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center #cbd5e1">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.shutterstock.com/image-vector/dragon-ball-series-vector-four-600nw-1943733841.jpg",
          }}
        />
        <Text style={styles.text}>
          Welcome to the DragonBall quote generator!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderColor: "#030712",
    borderWidth: 2,
    borderRadius: 0,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 20,
  },
});
