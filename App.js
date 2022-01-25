import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './app/components/AppText';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WellcomeScreen from './app/screens/WellcomeScreen';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from './app/components/AppButton';

export default function App() {
    return (
        <View style={styles.container}>
            <AppText>React Native</AppText>
            <MaterialCommunityIcons 
                name="email" 
                size={60}
            />
            <AppButton title="Login" onPress={() => console.log('tapped')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderRadius: 50,
        borderColor: 'royalblue'
    }
})