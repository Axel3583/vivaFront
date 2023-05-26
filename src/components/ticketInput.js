import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TicketInput = () => {
  const [ticketCode, setTicketCode] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");

  useEffect(() => {
    if (ticketCode.trim() !== "") {
      fetch(`http://localhost:3000/tickets/${ticketCode}`)
        .then((response) => response.json())
        .then((data) => {
          setQRCodeValue(data.code);
        })
        .catch((error) => {
          console.error("Error fetching ticket code:", error);
        });
    }
  }, [ticketCode]);

  const handleTicketCodeChange = (code) => {
    setTicketCode(code);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTicketCodeChange}
        value={ticketCode}
        placeholder="Enter ticket code"
      />
      {qrCodeValue ? (
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrCodeValue} size={200} />
          <TouchableOpacity style={styles.button} onPress={() => setQRCodeValue("")}>
            <Text style={styles.buttonText}>New QR Code</Text>
          </TouchableOpacity>
        </View>
      ) : null}
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
    backgroundColor: "#3c7dec",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
    width: 100,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'MuseoSans_500',
    color: "white",
  },
  qrCodeContainer: {
    alignItems: "center",
  },
});

export default TicketInput;
