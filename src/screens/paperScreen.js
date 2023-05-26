import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

const companies = [
  "Google",
  "Facebook",
  "Amazon",
  "Apple",
  "Microsoft",
  "Airbnb",
  "Uber",
  "Spotify",
  "Blablacar",
  "Deezer",
];

export default function PaperScreen() {
  const [document, setDocument] = useState(null);
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (!result.cancelled) {
      setDocument(result);
    }
  };

  const removeDocument = () => {
    setDocument(null);
  };

  const sendDocument = () => {
    console.log('CV sent to', email, 'for company:', selectedCompany, 'with comment:', comment);
    // Ajoutez ici votre logique pour l'envoi du CV
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envoi de CV</Text>
      <View style={styles.fileContainer}>
        <Ionicons name="document-attach" size={40} color="#841584" />
        <View style={styles.fileInfo}>
          {document ? (
            <>
              <Text style={styles.fileName}>{document.name}</Text>
              <Ionicons
                name="close-circle"
                size={24}
                color="red"
                onPress={removeDocument}
              />
            </>
          ) : (
            <Button
              color="#841584"
              title="Choisir un CV"
              onPress={pickDocument}
            />
          )}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Entrez l'email du destinataire"
        />
        <TextInput
          style={styles.input}
          onChangeText={setComment}
          value={comment}
          placeholder="Ajoutez un commentaire"
          multiline
        />
        <Picker
          selectedValue={selectedCompany}
          onValueChange={(itemValue) => setSelectedCompany(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Sélectionnez une entreprise" value="" />
          {companies.map((company, index) => (
            <Picker.Item key={index} label={company} value={company} />
          ))}
        </Picker>
      </View>
      <Button color="#841584" title="Envoyer le CV" onPress={sendDocument} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'MuseoSans_100',
    color: '#841584',
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  fileInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#841584',
  },
  fileName: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#841584',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    color: '#333',
  },
  picker: {
    borderColor: '#888888',
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: '#FFF',
    color: '#333',
  },
});
