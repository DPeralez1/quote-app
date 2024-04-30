import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useEffect, useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  const [character, setCharacter] = useState("Loading...");
  const [quote, setQuote] = useState("Loading...");
  const [loading, setLoading] = useState(false);

  const randomQuote = () => {
    setLoading(true);
    fetch("https://animechan.xyz/api/random/character?name=vegeta")
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

  return (
    <View className="flex-1 justify-center items-center bg-cyan-800">
      <View
        style={{
          width: "90%",
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <StatusBar barStyle="light-content" />
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "600",
            color: "#333",
            marginBottom: 20,
          }}
        >
          Prince of all Saiyans!
        </Text>
        <FontAwesome5
          name="quote-left"
          style={{ fontSize: 20, marginBottom: -12 }}
          color="#000"
        />
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 0.5,
            fontWeight: "400",
            textAlign: "center",
            marginBottom: 10,
            paddingHorizontal: 30,
          }}
        >
          {quote}
        </Text>
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
        <Text
          style={{
            textAlign: "right",
            fontWeight: "300",
            fontStyle: "italic",
            fontSize: 16,
            color: "#000",
          }}
        >
          -- {character}
        </Text>
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
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 2,
              borderColor: "#155E75",
              borderRadius: 50,
              padding: 15,
            }}
          >
            <FontAwesome5 name="volume-up" size={22} color="#155E75" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 2,
              borderColor: "#155E75",
              borderRadius: 50,
              padding: 15,
            }}
          >
            <FontAwesome5 name="copy" size={22} color="#155E75" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 2,
              borderColor: "#155E75",
              borderRadius: 50,
              padding: 15,
            }}
          >
            <FontAwesome5 name="twitter" size={22} color="#155E75" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  //   <NavigationContainer>
  //     <Tab.Navigator>
  //       <Tab.Screen name="Home" component={HomeScreen} />
  //       <Tab.Screen name="Settings" component={SettingsScreen} />
  //       <Tab.Screen name="Quote" component={Quote} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );
}
