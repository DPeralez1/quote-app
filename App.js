import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quote from "./tabs/Quote.js";
import HomeScreen from "./tabs/HomeScreen.js";
import SettingsScreen from "./tabs/SettingsScreen.js";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function App() {
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
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "600",
            color: "#333",
            marginBottom: 20,
          }}
        >
          Quote of the day!
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
          Does a machine like yourself ever experience fear?
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
          -- Character
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: "#155E75",
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
            New Quote
          </Text>
        </TouchableOpacity>
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
