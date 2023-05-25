import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
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