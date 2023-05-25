import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProgramScreen() {
    const [selectedButton, setSelectedButton] = useState("Wednesday 14");

    const handleLogoPress = () => {
        navigation.navigate("Home");
    };

    const handleButtonPress = (button) => {
        setSelectedButton(button);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={handleLogoPress}>
                    <Image
                        source={require("../../assets/image/logo-v.png")}
                        style={styles.logo}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleButtonPress("Wednesday 14")}
                    style={[
                        styles.button,
                        selectedButton === "Wednesday 14" && styles.selectedButton,
                    ]}
                >
                    <Text style={styles.buttonText}>Wednesday 14</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleButtonPress("Thursday 15")}
                    style={[
                        styles.button,
                        selectedButton === "Thursday 15" && styles.selectedButton,
                    ]}
                >
                    <Text style={styles.buttonText}>Thursday 15</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleButtonPress("Friday 16")}
                    style={[
                        styles.button,
                        selectedButton === "Friday 16" && styles.selectedButton,
                    ]}
                >
                    <Text style={styles.buttonText}>Friday 16</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleButtonPress("Saturday 17")}
                    style={[
                        styles.button,
                        selectedButton === "Saturday 17" && styles.selectedButton,
                    ]}
                >
                    <Text style={styles.buttonText}>Saturday 17</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.columnsContainer}>
                {selectedButton === "Wednesday 14" && (
                    <View style={styles.columnsContainer}>
                        <View style={styles.column}>
                            <View style={styles.block}>
                                <View style={styles.sessionDateContainer}>
                                    <View style={styles.dateContainer}>
                                        <Text style={styles.dayText}>Wed</Text>
                                        <Text style={styles.dayText}>14</Text>
                                    </View>
                                    <View style={styles.hourContainer}>
                                        <MaterialCommunityIcons name="clock" size={20} color="black" style={styles.clockIcon} />
                                        <Text style={styles.timeText}>10:00 - 10:15</Text>
                                    </View>
                                    <View style={styles.roomContainer}>
                                        <Text style={styles.roomNameText}>Stage 3</Text>
                                    </View>
                                </View>
                                <Text>Wednesday 14 - Column A - Block 1</Text>
                            </View>
                            <View style={styles.block}>
                                <Text>Wednesday 14 - Column A - Block 2</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.block}>
                                <Text>Wednesday 14 - Column B - Block 1</Text>
                            </View>
                            <View style={styles.block}>
                                <Text>Wednesday 14 - Column B - Block 2</Text>
                            </View>
                        </View>
                    </View>
                )}
                {/* Render other selectedButton conditions */}
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
    logoContainer: {
        position: "absolute",
        top: 60,
        left: 20,
        zIndex: 1,
    },
    logo: {
        width: 60,
        height: 60,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 20,
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "lightgray",
        borderRadius: 5,
        marginRight: 10,
    },
    selectedButton: {
        backgroundColor: "gray",
    },
    buttonText: {
        fontWeight: "bold",
    },
    columnsContainer: {
        flexDirection: "column",
        paddingHorizontal: 10,
    },
    column: {
        // alignItems: "center",
    },
    block: {
        backgroundColor: "lightblue",
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
    },
    sessionDateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 5,
    },
    dateContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dayText: {
        marginRight: 5,
        fontWeight: "bold",
    },
    roomContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    roomNameText: {
        fontWeight: "bold",
    },
    hourContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
    clockIcon: {
        marginRight: 5,
    },
});
