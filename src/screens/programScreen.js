import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

export default function ProgramScreen() {
    const [columnsLayout, setColumnsLayout] = useState("A");

    const handleLogoPress = () => {
        navigation.navigate('Home');
    };

    const handleSwitchLayout = () => {
        setColumnsLayout(columnsLayout === "A" ? "B" : "A");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogoPress}>
                <Image
                    source={require('../../assets/image/logo-v.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSwitchLayout} style={styles.button}>
                    <Text style={styles.buttonText}>Switch Layout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.columnsContainer}>
                {columnsLayout === "A" && (
                    <View style={styles.column}>
                        <View style={styles.block}>
                            <Text>Column A - Block 1</Text>
                        </View>
                        <View style={styles.block}>
                            <Text>Column A - Block 2</Text>
                        </View>
                    </View>
                )}
                {columnsLayout === "B" && (
                    <View style={styles.column}>
                        <View style={styles.block}>
                            <Text>Column B - Block 1</Text>
                        </View>
                        <View style={styles.block}>
                            <Text>Column B - Block 2</Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
    },
    logo: {
        position: 'absolute',
        top: 60,
        left: 20,
        width: 60,
        height: 60,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "lightgray",
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: "bold",
    },
    columnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    column: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    block: {
        backgroundColor: "lightblue",
        width: (width - 80) / 2, // Adjust the width of the blocks based on the available space
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
    },
});