import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quote from "./tabs/Quote.js";
import HomeScreen from "./tabs/HomeScreen.js";
import SettingsScreen from "./tabs/SettingsScreen.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Quote" component={Quote} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
