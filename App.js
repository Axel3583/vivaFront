import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/screens/homeScreen";
import ScannerForm from "./src/screens/scanneScreen";
import BackgroundImage from "../vivaFront/assets/background.png";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#F5A229"
          inactiveColor="black"
          barStyle={{ backgroundColor: "#FAFAF8" }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Scanner"
            component={ScannerForm}
            options={{
              tabBarLabel: "Ticket",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="ticket" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
