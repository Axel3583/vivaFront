import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { WebView } from 'react-native-webview';

export default function CameraScanner({ handleGoBack }){

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedUrl, setScannedUrl] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleScanAgain = () => {
    setScanned(false);
  };

  const handleBarCodeScannedInternal = ({ data }) => {
    console.log(data)
    setScanned(true);
    setScannedUrl(data);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    }}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        scannedUrl ? (
          <WebView source={{ uri: scannedUrl }} />
        ) : (
          <View>
            <TouchableOpacity style={styles.button} onPress={handleScanAgain}>
              <Text style={styles.buttonText}>Scan again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleGoBack}>
              <Text style={styles.buttonText}>Retour</Text>
            </TouchableOpacity>
          </View>
        )
      ) : (
        <>
          <Camera
            style={styles.camera}
            onBarCodeScanned={handleBarCodeScannedInternal}
          />
          <TouchableOpacity style={styles.button} onPress={handleGoBack}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: "80%",
    aspectRatio: 1,
  },
  button: {
    backgroundColor: "#BE2B3E",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'MuseoSans_500'
  },
});

