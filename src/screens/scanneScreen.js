import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from "react-native";
import CameraScanner from "../components/cameraScanner";
import TicketInput from "../components/ticketInput";
import UploadTicket from "../components/uploadTicket";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient';

export default function ScannerForm() {
  const [showCamera, setShowCamera] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [ticketCode, setTicketCode] = useState("");
  const [ticketUrl, setTicketUrl] = useState("");
  const [showTicketDownloader, setShowTicketDownloader] = useState(false);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setShowCamera(false);
    setShowInput(false);
    setTicketCode(data);
    Alert.alert(`Scanned data: ${data}`);
    setIsCardSelected(true);
  };

  const handleTicketCodeChange = (text) => {
    setTicketCode(text);
  };

  const handleTicketCodeSubmit = () => {
    Alert.alert(`Ticket code: ${ticketCode}`);
    setIsCardSelected(true);
  };

  const handleCameraPress = () => {
    setShowCamera(true);
    setShowInput(false);
    setIsCardSelected(false);
  };

  const handleInputPress = () => {
    setShowInput(true);
    setShowCamera(false);
    setIsCardSelected(false);
  };

  const handleCancelPress = () => {
    setShowCamera(false);
    setShowInput(false);
    setShowTicketDownloader(false);
    setIsCardSelected(false);
  };

  const handleGoBack = () => {
    setShowCamera(false);
    setShowInput(false);
    setIsCardSelected(false);
  };

  return (
    <View style={styles.container}>
      {!isCardSelected && !showInput && !showCamera && (
        <View>
          <UploadTicket />
        </View>
      )}

      <View style={styles.container}>
        {showCamera ? (
          <CameraScanner
            handleBarCodeScanned={handleBarCodeScanned}
            handleGoBack={handleCancelPress}
          />
        ) : showInput ? (
          <TicketInput
            ticketCode={ticketCode}
            handleTicketCodeChange={handleTicketCodeChange}
            handleTicketCodeSubmit={handleTicketCodeSubmit}
            handleGoBack={handleGoBack}
          />
        ) : (
          <View style={styles.buttonContainer}>
            <Card containerStyle={styles.card}>
              <LinearGradient
                colors={['#fff265', '#ff5900', '#f5255d']}
                style={styles.button}
              >
                <TouchableOpacity onPress={handleInputPress}>
                  <View style={styles.iconContainer}>
                    <Icon name="edit" size={20} color="#fff" style={styles.icon} />
                  </View>
                  <Text style={styles.buttonText}>Entrer le code du ticket</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Card>
            <Card containerStyle={styles.card}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleInputPress}
              >
                <View style={styles.iconContainer}>
                  <Icon
                    name="edit"
                    size={20}
                    color="#fff"
                    style={styles.icon}
                  />
                </View>
                <Text style={styles.buttonText}>Entrer le code du ticket</Text>
              </TouchableOpacity>
            </Card>
          </View>
        )}
      </View>
    </View>
  );
}



const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "colum",
  },
  buttonContainer: {
    flexDirection: "colum",
  },
  // container: {
  //   backgroundColor: '#d3d3d3',
  //   borderRadius: 3,
  //   padding: width < 380 ? 10 : 16,
  //   minWidth: 280,
  //   minHeight: 230,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   shadowColor: '#000', // Couleur de l'ombre
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   borderStyle: 'dashed', // Style des bordures en pointillés
  //   borderColor: '#fff', // Couleur des bordures en pointillés
  //   borderWidth: 1,
  // },

  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    // backgroundImage: 'linear-gradient(135deg, #fff265, #ff5900, #f5255d)',
    // backgroundColor: 'linear-gradient(135deg, #fff265, #ff5900, #f5255d)',
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "MuseoSans_500",
  },
  iconContainer: {
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
    fontFamily: "MuseoSans_500",
  },
  card: {
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    elevation: 3,
  },
});
