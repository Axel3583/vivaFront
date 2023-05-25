import React, {useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import FileUpload from './fileUpload';
import FileList from './FileList';
// import { Card as ScannerCard, Text } from '@blueromans/react-native-ui-kit';

export default function CardUpload() {
//   const fileInputState = {
//     value: { name: 'example.pdf' } // Remplacez cette valeur par l'état réel de votre fichier
//   };
const [files, setFiles] = useState([{
    name: 'myFile.pdf'
}])

const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
}

console.log(files)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Télécharger un ticket</Text>
        <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
        <FileList files={files} removeFile={removeFile}/>
    </View>
    // <ScannerCard>
    //   <ScannerCard.Cover style={{ backgroundColor: '#f15700' }} />
    //   <Text>The file name is {fileInputState.value?.name}</Text>
    // </ScannerCard>
  );
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
      fontWeight: 'bold',
      marginBottom: 30,
      fontSize: 20,
      color: '#E47B24',
      fontFamily: 'MuseoSans_900'
    }
})
