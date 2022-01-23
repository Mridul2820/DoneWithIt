import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from '../config/colors';

const WellcomeScreen = () => {
    return (
        <ImageBackground 
            source={require("../assets/background.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
})

export default WellcomeScreen;
