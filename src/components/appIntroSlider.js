import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from 'react-native-vector-icons';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import App from '../../App';

const slides = [
    {
        key: '1',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('../../assets/image/1.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: '2',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../../assets/image/2.jpg'),
        backgroundColor: '#febe29',
    },
    // {
    //     key: '3',
    //     title: 'Rocket guy',
    //     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    //     image: require('../../assets/image/3.jpg'),
    //     backgroundColor: '#22bcb5',
    // },
    {
        key: '4',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../assets/gradient/1.png'),
        backgroundColor: '#22bcb5',
    }
];

export default class AppIntro extends React.Component {
    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
            </View>
        );
    }

    _renderButton = (name) => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name={name}
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    }

    _renderNextButton = () => {
        return this._renderButton("md-arrow-forward-outline");
    };

    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-checkmark-done"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    onPress={this.props.handleDone}  // Use the function passed from the parent component
                />
            </View>
        );
    };
  
    render() {
        return (
            <AppIntroSlider
                renderItem={this._renderItem}
                data={slides}
                activeDotStyle={{
                    backgroundColor: "#21465b",
                    width: 25
                }}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
            />
        );
    }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: width < 350 ? 13 : 15,  // Adjust size for smaller devices
        color: '#333',
        textAlign: 'center',
        paddingHorizontal: 30
    },
    text: {
        color: '#666',
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: width < 350 ? 20 : 23,  // Adjust size for smaller devices
        fontWeight: 'bold',
        color: '#21465b',
        alignSelf: 'center'
    },
    image: {
        width: width,
        height: height,  // use percentage instead of fixed height
        resizeMode: 'cover',
    },
    buttonCircle: {
        width: width * 0.1, // use percentage of width
        height: width * 0.1, // use percentage of width
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: width * 0.1 / 2, // use percentage of width
        justifyContent: 'center',
        alignItems: 'center',
    },
});

