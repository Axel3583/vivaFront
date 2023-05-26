import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const assistanceMessages = [
  { id: '1', content: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' },
//   { id: '2', content: 'Avez-vous des questions spécifiques sur notre produit ?' },
//   { id: '3', content: 'Je peux vous aider à résoudre les problèmes que vous rencontrez.' },
];

const generateResponse = (question) => {
  // Logique de génération de la réponse en fonction de la question
  // Dans cet exemple, nous générons simplement une réponse aléatoire parmi une liste prédéfinie
  const responses = [
    'Je suis désolé, je ne peux pas répondre à cette question.',
    'Je vais vérifier cela pour vous.',
    'Veuillez patienter un instant.',
    'Pouvez-vous préciser davantage votre question ?',
    'Nous avons une équipe d\'assistance dédiée pour répondre à cette question.',
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

export default function MessageScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(assistanceMessages);

  const handleSend = () => {
    if (message.trim() === '') return;
    const response = generateResponse(message);
    setMessages([...messages, { id: Date.now().toString(), content: message }, { id: Date.now().toString() + 'r', content: response }]);
    setMessage('');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <FlatList
        style={styles.messageList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            {item.id === '1' ? (
              <View style={[styles.messageBubble, styles.assistantBubble]}>
                <MaterialIcons name="assistant" size={24} color="#FFF" />
                <Text style={styles.messageContent}>{item.content}</Text>
              </View>
            ) : (
              <View style={[styles.messageBubble, styles.userBubble]}>
                <Text style={styles.messageContent}>{item.content}</Text>
              </View>
            )}
          </View>
        )}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre message..."
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  messageBubble: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  assistantBubble: {
    backgroundColor: '#E47B24',
  },
  userBubble: {
    backgroundColor: '#999999',
  },
  messageContent: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#E47B24',
    borderRadius: 20,
    padding: 10,
  },
});
