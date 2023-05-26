import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function FileItem({ file, deleteFile }) {
  const handleDelete = () => {
    deleteFile(file.name);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDelete}>
        {/* <View style={styles.fileContainer}>
          <MaterialIcons name="delete-outline" size={24} color="black" />
          <Text style={styles.fileName}>{file.name}</Text>
        </View> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileName: {
    marginLeft: 10,
  },
});
