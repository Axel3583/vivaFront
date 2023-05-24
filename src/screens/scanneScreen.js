import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import CameraScanner from "../components/cameraScanner";
import TicketInput from "../components/ticketInput";
import TicketDownloader from "../components/TicketDownloader";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ScannerForm() {
  const [showCamera, setShowCamera] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [ticketCode, setTicketCode] = useState("");
  const [ticketUrl, setTicketUrl] = useState("");
  const [showTicketDownloader, setShowTicketDownloader] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setShowCamera(false);
    setShowInput(false);
    setTicketCode(data);
    setTicketUrl("https://drive.google.com/drive/my-drive");
    Alert.alert(`Scanned data: ${data}`);
  };

  const handleTicketCodeChange = (text) => {
    setTicketCode(text);
  };

  const handleTicketCodeSubmit = () => {
    Alert.alert(`Ticket code: ${ticketCode}`);
  };

  const handleCameraPress = () => {
    setShowCamera(true);
    setShowInput(false);
  };

  const handleInputPress = () => {
    setShowInput(true);
    setShowCamera(false);
  };

  const handleCancelPress = () => {
    setShowCamera(false);
    setShowInput(false);
    setShowTicketDownloader(false);
  };

  const handleGoBack = () => {
    handleCancelPress();
  };

  const handleTicketDownload = () => {
    setTicketUrl("https://drive.google.com/drive/my-drive");
    setShowTicketDownloader(true);
  };

  return (
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
          handleGoBack={handleCancelPress}
        />
      ) : showTicketDownloader && ticketUrl ? (
        <TicketDownloader
          ticketUrl={ticketUrl}
          handleGoBack={handleCancelPress}
        />
      ) : (
        <View style={styles.buttonContainer}>
          <Card containerStyle={styles.card}>
            <TouchableOpacity style={styles.button} onPress={handleCameraPress}>
              <View style={styles.iconContainer}>
                <Icon
                  name="qrcode"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
              </View>
              <Text style={styles.buttonText}>Scanner un QR code</Text>
            </TouchableOpacity>
          </Card>
          <Card containerStyle={styles.card}>
            <TouchableOpacity style={styles.button} onPress={handleInputPress}>
              <View style={styles.iconContainer}>
                <Icon name="edit" size={20} color="black" style={styles.icon} />
              </View>
              <Text style={styles.buttonText}>Entrer le code du ticket</Text>
            </TouchableOpacity>
          </Card>
          <Card containerStyle={styles.card}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleTicketDownload}
            >
              <View style={styles.iconContainer}>
                <Icon
                  name="download"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
              </View>
              <Text style={styles.buttonText}>Télécharger le ticket</Text>
            </TouchableOpacity>
          </Card>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
  },
  card: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    elevation: 3,
  },
  button: {
    backgroundColor: "#F5A229",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 2,
  },
  iconContainer: {
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
});
