import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './app/components/AppText';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WellcomeScreen from './app/screens/WellcomeScreen';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from './app/components/Card';

export default function App() {
    return (
        <View style={styles.container}>
            <Card 
                title="Red Jacket For Sale"
                subTitle="$100"
                image={require("./app/assets/jacket.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 60
    }
})