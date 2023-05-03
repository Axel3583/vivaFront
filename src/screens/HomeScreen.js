import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen(){

   return(
    <View style={styles.container}>
        <Text>
            Hello World !
        </Text>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }
})