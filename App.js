import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/homeScreen';
import ScannerForm from './src/screens/scanneScreen';
import ProgramScreen from './src/screens/programScreen';
import AppIntro from './src/components/appIntroSlider';
import * as Font from 'expo-font';
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
import { FontAwesome } from '@expo/vector-icons';
import PaperScreen from "./src/screens/paperScreen";
import MessageScreen from "./src/screens/messageScreen";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const isValidTicket = false;

// const handleTicketCodeSubmit = () => {
// //   const { ticketCode } = state;

// //   // Vérifiez la validité du ticket ici en fonction de votre logique
// //   const isValid = validateTicketCode(ticketCode); // Remplacez validateTicketCode par votre fonction de validation

// //   this.setState({ isValidTicket: isValid });
// // };

function TabNavigator({ isValidTicket, setValidTicket }) {
  return (
    <Tab.Navigator
      initialRouteName="Scanne"
      activeColor="#ff0081"
      inactiveColor="#5508a0"
      barStyle={{ background: '#FAF9F7' }}
          tabBarOptions={{
        showLabel: true,
        style: { height: 60 },
      }}
    >
      <Tab.Screen
        name="Ticket"
        component={(props) => <ScannerForm {...props} setValidTicket={setValidTicket} />}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={26} />),
        }}
      />

      {!isValidTicket ? (
        <>
          <Tab.Screen
            name="Stands"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="assistant" size={27} color="black" />),
            }}
          />

        <Tab.Screen
          options={{
            tabBarLabel: 'Programme',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open-page-variant" color={color} size={26} />),
          }}
          name="Program"
          component={ProgramScreen}
        />

          <Tab.Screen
            name="Cv"
            component={PaperScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="paper-plane-o" size={27} color="black" />
              ),
            }}
          />

          <Tab.Screen
            name="Assitance"
            component={MessageScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="message" color={color} size={27} />
              ),
            }}
          />
        </>
      ) : null}
    </Tab.Navigator>
  );

}


export default class App extends React.Component {
  state = {
    showIntro: true,
    isLoading: false,
    fontLoaded: false,
    isValidTicket: false,
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

  setValidTicket = (isValid) => {
    this.setState({ isValidTicket: isValid });
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
            <TabNavigator setValidTicket={this.setValidTicket} isValidTicket={this.state.isValidTicket} />
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
