import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import CameraScanner from "../components/cameraScanner";
import TicketInput from "../components/ticketInput";

export default function ScannerForm() {
  const [showCamera, setShowCamera] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [ticketCode, setTicketCode] = useState("");

  const handleBarCodeScanned = ({ type, data }) => {
    setShowCamera(false);
    setShowInput(false);
    setTicketCode(data);
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
  };
  const handleGoBack = () => {
    handleCancelPress();
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
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCameraPress}>
            <Text style={styles.buttonText}>Scanner un QR code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleInputPress}>
            <Text style={styles.buttonText}>Entrer le code du ticket</Text>
          </TouchableOpacity>
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    maxWidth: "90%",
  },
  button: {
    backgroundColor: "#F5A229",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
