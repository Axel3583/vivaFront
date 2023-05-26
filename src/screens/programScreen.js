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
                    {/* <TouchableOpacity
                        onPress={() => handleButtonPress("prev")}
                        style={[styles.button, styles.arrowButton]}
                    >
                        <Text style={styles.arrowButtonText}>{'<'}</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => handleButtonPress("Wednesday 14")}
                        style={[
                            styles.button,
                            selectedButton === "Wednesday 14" && styles.selectedButton,
                        ]}
                    >
                        <Text style={styles.buttonText}>Wed 14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleButtonPress("Thursday 15")}
                        style={[
                            styles.button,
                            selectedButton === "Thursday 15" && styles.selectedButton,
                        ]}
                    >
                        <Text style={styles.buttonText}>Thu 15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleButtonPress("Friday 16")}
                        style={[
                            styles.button,
                            selectedButton === "Friday 16" && styles.selectedButton,
                        ]}
                    >
                        <Text style={styles.buttonText}>Fri 16</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleButtonPress("Saturday 17")}
                        style={[
                            styles.button,
                            selectedButton === "Saturday 17" && styles.selectedButton,
                        ]}
                    >
                        <Text style={styles.buttonText}>Sat 17</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => handleButtonPress("next")}
                        style={[styles.button, styles.arrowButton]}
                    >
                        <Text style={styles.arrowButtonText}>{'>'}</Text>
                    </TouchableOpacity> */}
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
                    {selectedButton === "Friday 16" && (
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
                                            <Text style={styles.dayText}>Fri</Text>
                                            <Text style={styles.dayText}>16</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>16:15 - 16:35</Text>
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
                                        <Text style={styles.firstTitleText}>Founder Story: Going From Zero to a Million</Text>
                                        <Text style={styles.societyText}>Scaling Up</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p4.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Cyril Chiche</Text>
                                            <Text style={styles.jobText}>CEO (LYDIA)</Text>
                                        </View>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p4-2.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Marion Moreau</Text>
                                            <Text style={styles.jobText}>Founder and Editor-in-Chief (HNMEDIA)</Text>
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
                                            <Text style={styles.dayText}>Fri</Text>
                                            <Text style={styles.dayText}>16</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>16:00 - 17:30</Text>
                                        </View>
                                        <View style={styles.roomContainer}>
                                            <MaterialCommunityIcons name="map-marker" size={20} color="white" style={styles.mapIcon} />
                                            <Text style={styles.roomNameText}>Stadium</Text>
                                        </View>
                                    </LinearGradient>
                                    <LinearGradient
                                        colors={['#5508a0', '#a1009b']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        angle={45}
                                        style={styles.titleContainer}
                                    >
                                        <Text style={styles.firstTitleText}>Inside Los Angeles 2028, Year-5</Text>
                                        <Text style={styles.societyText}>Future of Sport</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p4-3.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Michelle Schwartz</Text>
                                            <Text style={styles.jobText}>Chief External Affairs Officer</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    {selectedButton === "Saturday 17" && (
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
                                            <Text style={styles.dayText}>Sat</Text>
                                            <Text style={styles.dayText}>17</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>14:30 - 15:15</Text>
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
                                        <Text style={styles.firstTitleText}>Derrière les rideaux : découvrir les métiers des jeux vidéo</Text>
                                        <Text style={styles.societyText}>Creator's Economy, Gaming & Metaverse</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p5-1.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Mickael Dell'ova</Text>
                                            <Text style={styles.jobText}>Senior Player Experience Designer</Text>
                                        </View>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p5-2.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Jonathan Duval</Text>
                                            <Text style={styles.jobText}>Academic coordinator Game Section (ECV)</Text>
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
                                            <Text style={styles.dayText}>Sat</Text>
                                            <Text style={styles.dayText}>17</Text>
                                        </View>
                                        <View style={styles.hourContainer}>
                                            <MaterialCommunityIcons name="clock" size={20} color="white" style={styles.clockIcon} />
                                            <Text style={styles.timeText}>15:15 - 15:35</Text>
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
                                        <Text style={styles.firstTitleText}>La FrenchTech au-delà de Paris ?</Text>
                                        <Text style={styles.societyText}>Building Future Societies, Scaling up</Text>
                                    </LinearGradient>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p5-3.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Thomas Benzazon</Text>
                                            <Text style={styles.jobText}>Co-Founder (FEUILLEBLANCHE)</Text>
                                        </View>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.circleImageContainer}>
                                            <Image
                                                source={require("../../assets/image/p5-4.png")}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.nameText}>Hawa Dramé</Text>
                                            <Text style={styles.jobText}>Founder (TIME2START)</Text>
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
        backgroundColor: "#1d6ff7",
        borderRadius: 20,
        marginRight: 5,
    },
    selectedButton: {
        backgroundColor: "#1d71f724",
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
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
