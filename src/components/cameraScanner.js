import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

const CameraScanner = ({ handleBarCodeScanned, handleGoBack }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
    setScanned(true);
    handleBarCodeScanned(data);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <View>
          <TouchableOpacity style={styles.button} onPress={handleScanAgain}>
            <Text style={styles.buttonText}>Scan again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGoBack}>
            <Text style={styles.buttonText}>Retour</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Camera
            style={styles.camera}
            onBarCodeScanned={handleBarCodeScannedInternal}
          />
          <TouchableOpacity style={styles.button} onPress={handleGoBack}>
            <Text style={styles.buttonText}>Annuler</Text>
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
    backgroundColor: "#3c7dec",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'MuseoSans_500',
    color: "white",
  },
});

export default CameraScanner;
