import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Dimensions,FlatList,ScrollView } from 'react-native';
import List from "./list";

export default function VivaTech() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => { setIsHovered(true); };
    const handleMouseLeave = () => { setIsHovered(false); };

    return (
        <View style={styles.container}>
            
                <ScrollView>
                <View style={[styles.cardContainer, { shadowColor: isHovered ? '#000' : 'black' }]}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Liste des exposants</Text>
                        <List/>
                    </View>
                </View>
            </ScrollView>
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
        paddingTop: 60
    },
    cardText: {
        fontSize: width * 0.04, // Utiliser une unité relative pour la taille de police 
        textAlign: 'center',
    },
});