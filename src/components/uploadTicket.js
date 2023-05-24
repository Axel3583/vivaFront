import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as DocumentPicker from 'expo-document-picker';
import { Entypo } from '@expo/vector-icons';
import CardUpload from './cardUpload';

export default function UploadTicket (){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
            {/* <Entypo name="upload" size={60} color="black" /> */}
           <CardUpload/>
          </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // button: {
    //     backgroundColor: "#3498db",
    //     padding: 10,
    //     borderRadius: 5,
    //     marginHorizontal: 5,
    //   }
})