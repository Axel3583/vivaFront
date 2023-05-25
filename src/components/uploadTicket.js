import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as DocumentPicker from 'expo-document-picker';
import { Entypo } from '@expo/vector-icons';
import CardUpload from './cardUpload';

export default function UploadTicket (){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
           <CardUpload/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})