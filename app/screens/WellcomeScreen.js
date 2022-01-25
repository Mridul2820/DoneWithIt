import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const WellcomeScreen = () => {
    return (
        <ImageBackground 
            source={require("../assets/background.jpg")}
            style={styles.background}
            blurRadius={5}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
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
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
        color: colors.black
    },
})

export default WellcomeScreen;
