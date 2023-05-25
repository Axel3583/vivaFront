import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/screens/homeScreen";
import ScannerForm from "./src/screens/scanneScreen";
import AppIntro from "./src/components/appIntroSlider";
import * as Font from "expo-font";
import {
  StyleSheet,
  ActivityIndicator,
  Animated,
  View,
  Image,
  ImageBackground,
} from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const Tab = createMaterialBottomTabNavigator();

const isValidTicket = false;

// const handleTicketCodeSubmit = () => {
// //   const { ticketCode } = state;

// //   // Vérifiez la validité du ticket ici en fonction de votre logique
// //   const isValid = validateTicketCode(ticketCode); // Remplacez validateTicketCode par votre fonction de validation

// //   this.setState({ isValidTicket: isValid });
// // };

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Scanne"
      activeColor="#f55e30"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#FAF9F7" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Ticket",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          ),
        }}
        name="Scanne"
        component={ScannerForm}
      />

      {!isValidTicket ? (
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
      ) : null}
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  state = {
    showIntro: true,
    isLoading: false,
    fontLoaded: false,
  };

  fetchFonts = () => {
    return Font.loadAsync({
      MuseoSans_500: require("./assets/fonts/MuseoSans_500.otf"),
      MuseoSans_700: require("./assets/fonts/MuseoSans_700.otf"),
      MuseoSans_900: require("./assets/fonts/MuseoSans_900.otf"),
      MuseoSans_100: require("./assets/fonts/MuseoSans-100.otf"),
    });
  };

  componentDidMount() {
    this.loadFonts();
  }

  loadFonts = async () => {
    await this.fetchFonts();
    this.setState({ fontLoaded: true });
  };

  handleDone = () => {
    this.setState({ isLoading: true });
    this.setState({ showIntro: false });
    setTimeout(() => {
      this.setState({
        showIntro: false,
        isLoading: false,
      });
    }, 2000);
  };

  render() {
    const { showIntro, isLoading, fontLoaded } = this.state;

    return (
      <NavigationContainer>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {isLoading ? (
            fontLoaded ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#E47B24",
                }}
              >
                <Image
                  source={require("./assets/image/10.png")}
                  style={{ width: 350, height: 150 }}
                />
              </View>
            ) : null
          ) : showIntro ? (
            <AppIntro handleDone={this.handleDone} />
          ) : (
            <TabNavigator />
          )}
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
