import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import React from "react";
import Vegeta from "./tabs/Vegeta";
import Home from "./tabs/Home";
import Goku from "./tabs/Goku";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Vegeta" component={Vegeta} />
        <Tab.Screen name="Goku" component={Goku} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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

//   <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//       <Tab.Screen name="Quote" component={Quote} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );
