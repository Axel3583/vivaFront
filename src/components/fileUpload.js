import { Button, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const { width } = Dimensions.get('window');

export default function FileUpload({ files, setFiles, removeFile }) {
    // const uploadHandler = (event) => {
    //     // Fonction de gestion de l'envoi de fichier
    //     const file = event.target.files[0];
    //     file.isUploading = true;
    //     setFiles([...files, file])

    //     //upload file
    //     //     const formData = new FormData();
    //     //     formData.append(
    //     //         file.name,
    //     //         file,
    //     //         file.name
    //     //     )

    //     //     axios.post('http://localhost:8080/upload', formData)
    //     //     .then((res) => {
    //     //         file.isUploading = false;
    //     //         setFiles([...files, file])
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err)
    //     //         removeFile(file.name)
    //     //     })
    // }

    const handleUpload = async () => {
        try {
          const res = await DocumentPicker.getDocumentAsync();
    
          if (res.type === 'success') {
            const file = res;
            file.isUploading = true;
            setFiles([...files, file]);
            // Effectuer les opérations de téléchargement ici
            console.log('Fichier sélectionné:', file);

            //upload file
        //     const formData = new FormData();
        //     formData.append(
        //         file.name,
        //         file,
        //         file.name
        //     )

        //     axios.post('http://localhost:8080/upload', formData)
        //     .then((res) => {
        //         file.isUploading = false;
        //         setFiles([...files, file])
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         removeFile(file.name)
        //     })
          } else {
            console.log('Aucun fichier sélectionné');
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <View style={styles.container}>
            <View style={styles.fileInput}>
                <TouchableOpacity style={styles.button} onPress={handleUpload}>
                <AntDesign name="addfile" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.supportText}>Support files</Text>
            <Text style={styles.fileTypes}>PDF, JPG, PNG, SVG</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3d3d3',
        borderRadius: 3,
        padding: width < 380 ? 10 : 16,
        minWidth: 280,
        minHeight: 230,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderStyle: 'dashed', // Style des bordures en pointillés
        borderColor: '#fff', // Couleur des bordures en pointillés
        borderWidth: 1,
        paddingBottom: 50
    },

    fileInput: {
        position: 'relative',
        marginBottom: width < 380 ? 10 : 15,
    },
    fileInputInput: {
        position: 'absolute',
        maxWidth: 200,
        height: 46,
        zIndex: 2,
        opacity: 0
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f55e30',
        borderRadius: 4,
        width: width / 2,
        height: 50,
        alignContent: 'center'
    },
    buttonText: {
        fontSize: width < 380 ? 16 : 18,
        color: '#fff'
    },
    icon: {
        fontSize: 24,
        color: '#fff',
        marginRight: width < 380 ? 6 : 8
    },
    supportText: {
        fontSize: width < 380 ? 14 : 16,
        marginTop: width < 380 ? 10 : 12,
        fontFamily: 'MuseoSans_700'
    },
    fileTypes: {
        fontSize: width < 380 ? 14 : 16,
        marginTop: width < 380 ? 5 : 8,
        fontFamily: 'MuseoSans_500'
    }
});
