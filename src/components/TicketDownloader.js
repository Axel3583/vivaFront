import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";

const TicketDownloader = ({ ticketUrl,handleGoBack}) => {
  const handleDownloadTicket = async () => {
    try {
      const supported = await Linking.canOpenURL(ticketUrl);

      if (supported) {
        await Linking.openURL(ticketUrl);
      } else {
        console.log("Impossible d'ouvrir l'URL du ticket");
      }
    } catch (error) {
      console.log("Erreur lors du téléchargement du ticket :", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDownloadTicket}>
        <Text style={styles.buttonText}>Télécharger le ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F5A229",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TicketDownloader;
