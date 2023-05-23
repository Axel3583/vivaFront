import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function VivaTech() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => { setIsHovered(true); };
    const handleMouseLeave = () => { setIsHovered(false); };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.card, { backgroundColor: isHovered ? '#00bcd4' : '#fff' }]}
                onPress={() => console.log('Card pressed')}
                activeOpacity={0.8}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} >
                <View style={[styles.cardContainer, { shadowColor: isHovered ? '#000' : 'black' }]}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Card Title</Text>
                        <Text style={styles.cardText}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>);
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10, paddingTop: 15,
    },
    card: {
        width: '90%', // Utiliser un pourcentage pour la largeur 
        height: '80%', // Utiliser un pourcentage pour la hauteur 
        marginVertical: 10,
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '100%', // Utiliser un pourcentage pour la largeur 
        height: '100%', // Utiliser un pourcentage pour la hauteur 
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    cardContent: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: width * 0.06, // Utiliser une unité relative pour la taille de police 
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    cardText: {
        fontSize: width * 0.04, // Utiliser une unité relative pour la taille de police 
        textAlign: 'center',
    },
});