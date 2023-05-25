import React, {useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import FileUpload from './fileUpload';
import FileList from './FileList';

export default function CardUpload() {

const [files, setFiles] = useState([{
    name: 'myFile.pdf'
}])

const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
}

console.log(files)

  return (
    <View style={styles.container}>
        <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
        <FileList files={files} removeFile={removeFile}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '1em',
      fontFamily: 'MuseoSans_900'
    }
})
