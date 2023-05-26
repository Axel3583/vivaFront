import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";

import { ScrollView } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                        onPress={() => handleButtonPress("prev")}
                        style={[styles.button, styles.arrowButton]}
                    >
                        <Text style={styles.arrowButtonText}>{'<'}</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity
                        onPress={() => handleButtonPress("next")}
                        style={[styles.button, styles.arrowButton]}
                    >
                        <Text style={styles.arrowButtonText}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.columnsContainer}>
                    {selectedButton === "Wednesday 14" && (
                        <View style={styles.columnsContainer}>
                            <View style={styles.column}>
                                <View style={styles.block}>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.sessionDateContainer}
                                    >
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.dayText}>Wed</Text>
                                            <Text style={styles.dayText}>14</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>10:00 - 10:15</Text>
                                        </View>
                                        <View style={styles.roomContainer}>
                                            <MaterialCommunityIcons name="map-marker" size={20} color="white" style={styles.mapIcon} />
                                            <Text style={styles.roomNameText}>Stage 3</Text>
                                        </View>
                                    </LinearGradient>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.titleContainer}
                                    >
                                        <Text style={styles.firstTitleText}>(Un)Expected Trends: Digging into Deeptech</Text>
                                        <Text style={styles.societyText}>DeepTech</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p1.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Anne-Sophie Carresse</Text>
                                            <Text style={styles.jobText}>Partner (ELAIA PARTNERS)</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.block}>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.sessionDateContainer}
                                    >
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.dayText}>Wed</Text>
                                            <Text style={styles.dayText}>14</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>10:00 - 10:40</Text>
                                        </View>
                                        <View style={styles.roomContainer}>
                                            <MaterialCommunityIcons name="map-marker" size={20} color="white" style={styles.mapIcon} />
                                            <Text style={styles.roomNameText}>Stage 2</Text>
                                        </View>
                                    </LinearGradient>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.titleContainer}
                                    >
                                        <Text style={styles.firstTitleText}>Europe’s Energy: From Crisis to Catalyst</Text>
                                        <Text style={styles.societyText}>Energy & Climate Tech</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p2-1.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Dimitri Carbonnelle</Text>
                                            <Text style={styles.jobText}>CEO (LIVOSPHERE)</Text>
                                        </View>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p2-2.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Tim Gould</Text>
                                            <Text style={styles.jobText}>Chief Energy Economist (International Energy Agency)</Text>
                                        </View>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p2-3.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Ann Mettler</Text>
                                            <Text style={styles.jobText}>Vice-President, Europe (Breakthrough Energy)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    {selectedButton === "Thursday 15" && (
                        <View style={styles.columnsContainer}>
                            <View style={styles.column}>
                                <View style={styles.block}>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.sessionDateContainer}
                                    >
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.dayText}>Thu</Text>
                                            <Text style={styles.dayText}>15</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>11:40 - 12:05</Text>
                                        </View>
                                        <View style={styles.roomContainer}>
                                            <MaterialCommunityIcons name="map-marker" size={20} color="white" style={styles.mapIcon} />
                                            <Text style={styles.roomNameText}>Stage 3</Text>
                                        </View>
                                    </LinearGradient>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.titleContainer}
                                    >
                                        <Text style={styles.firstTitleText}>Founder Story: The Power of Mentorship</Text>
                                        <Text style={styles.societyText}>Scaling Up</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p3-1.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>John Chambers</Text>
                                            <Text style={styles.jobText}>CEO (JC2 VENTURES)</Text>
                                        </View>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p3-2.jpeg")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Umesh Sachdev</Text>
                                            <Text style={styles.jobText}>CEO and Co-Founder(UNIPHORE)</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.block}>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.sessionDateContainer}
                                    >
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.dayText}>Thu</Text>
                                            <Text style={styles.dayText}>15</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>12:10 - 12:30</Text>
                                        </View>
                                        <View style={styles.roomContainer}>
                                            <MaterialCommunityIcons name="map-marker" size={20} color="white" style={styles.mapIcon} />
                                            <Text style={styles.roomNameText}>Stage 2</Text>
                                        </View>
                                    </LinearGradient>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.titleContainer}
                                    >
                                        <Text style={styles.firstTitleText}>Start-Up Ecosystem: Taking the Pulse in Latin America</Text>
                                        <Text style={styles.societyText}>Scalling up</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p3-3.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Pierre Schurmann</Text>
                                            <Text style={styles.jobText}>CEO (NUVINI)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
    },
    scrollContainer: {
        flexGrow: 1,
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 150,
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
    arrowButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "lightgray",
        borderRadius: 5,
        marginHorizontal: 5,
    },
    arrowButtonText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    columnsContainer: {
        flexDirection: "column",
        paddingHorizontal: 10,
        width: 390,
        justifyContent: 'center',
        alignItems: "center",
    },
    column: {
        // alignItems: "center",
    },
    block: {
        backgroundColor: "white",
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#ff0081",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 34,
        elevation: 5,
    },
    sessionDateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
    },
    titleContainer: {
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
    },
    imageContainer: {
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    circleImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 10,
    },
    circleImage: {
        width: "100%",
        height: "100%",
    },
    nameText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "black",
        fontFamily: "MuseoSans_500",
        alignItems: "center",
    },
    jobText: {
        color: "gray",
        fontFamily: "MuseoSans_500",
    },
    dateContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dayText: {
        marginRight: 5,
        fontWeight: "bold",
        color: "white",
        fontFamily: "MuseoSans_500",
    },
    timeText: {
        marginRight: 5,
        fontWeight: "bold",
        color: "white",
        fontFamily: "MuseoSans_500",
    },
    roomContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    roomNameText: {
        fontWeight: "bold",
        color: "white",
        fontFamily: "MuseoSans_500",
    },
    hourContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    clockIcon: {
        marginRight: 5,
    },
    mapIcon: {
        marginRight: 5,
    },
    firstTitleText: {
        fontSize: 18,
        textTransform: 'uppercase',
        paddingTop: 5,
        color: 'white',
        lineHeight: 20,
        fontFamily: "MuseoSans_500",
    },
    societyText: {
        color: 'gray',
        fontFamily: "MuseoSans_500",
    }
});
