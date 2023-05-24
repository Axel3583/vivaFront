import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import FileItem from './FileItem'

export default function FileList({ files, removeFile }) {

    const deleteFileHandeler = (_name) => {
        // axios.delete(`http://localhost:8080/upload?name=${_name}`)
        // .then((res) => removeFile(_name))
        // .catch((err) => console.log(err))
        // Après avoir supprimé le fichier avec succès
        removeFile(_name);
    }
    return (
        <View style={styles.container}>
        <FlatList
          data={files}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <FileItem file={item} deleteFile={deleteFileHandeler} />
          )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 15
    }
})
