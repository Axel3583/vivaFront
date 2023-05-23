import React from "react";
import { StyleSheet, View, Text } from "react-native";
import VivaTech from "../components/vivaTech";

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <VivaTech/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'colum',
        alignItems: 'center'
    }
})