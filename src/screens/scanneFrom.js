import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

export default function ScannerForm() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [ticketCode, setTicketCode] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(`Scanned data: ${data}`);
  };

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleCameraPress = () => {
    setShowCamera(true);
    setShowInput(false);
    setShowBackButton(false);
    setScanned(false);
    requestCameraPermission();
  };

  const handleInputPress = () => {
    setShowInput(true);
    setShowCamera(false);
    setShowBackButton(true);
    setScanned(false);
  };

  const handleTicketCodeChange = (text) => {
    setTicketCode(text);
  };

  const handleTicketCodeSubmit = () => {
    Alert.alert(`Ticket code: ${ticketCode}`);
  };

  const renderCamera = () => {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        {scanned && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScanned(false)}
          >
            <Text style={styles.buttonText}>Scan again</Text>
          </TouchableOpacity>
        )}
        {showBackButton && (
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => {
              setShowCamera(false);
              setShowInput(false);
              setShowBackButton(false);
            }}
          >
            <Text style={styles.buttonText}>Retour</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderInput = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleTicketCodeChange}
          value={ticketCode}
          placeholder="Enter ticket code"
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => setShowInput(false)}
          >
            <Text style={styles.buttonText}>Retour</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleTicketCodeSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      {showCamera && renderCamera()}
      {showInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleTicketCodeChange}
            value={ticketCode}
            placeholder="Enter ticket code"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleTicketCodeSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => setShowInput(false)}
          >
            <Text style={styles.buttonText}>Retour</Text>
          </TouchableOpacity>
        </View>
      )}
      {!showCamera && !showInput && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCameraPress}
          >
            <Text style={styles.buttonText}>Scanner un QR code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleInputPress}
          >
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      maxWidth: '90%', 
    },
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5, 
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    cameraContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: '#000',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    cameraButton: {
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 30,
    },
    inputContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
      width: '80%',
      fontSize: 16,
      backgroundColor: '#fff',
    },
    submitButton: {
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    submitButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    backButton: {
      backgroundColor: '#ccc',
      marginLeft: 10,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      maxWidth: '90%',
    },
  });
  