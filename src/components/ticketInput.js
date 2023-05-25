import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const TicketInput = ({
  ticketCode,
  handleTicketCodeChange,
  handleTicketCodeSubmit,
  handleGoBack,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTicketCodeChange}
        value={ticketCode}
        placeholder="Enter ticket code"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleTicketCodeSubmit}
        >
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "80%",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    maxWidth: "90%",
  },
  button: {
    backgroundColor: "#BE2B3E",
    padding: 10,
    borderRadius: 5,
    alignItems: 'flex-start',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'MuseoSans_500'
  },
});

export default TicketInput;
