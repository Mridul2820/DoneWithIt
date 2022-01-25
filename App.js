import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './app/components/AppText';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WellcomeScreen from './app/screens/WellcomeScreen';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';

export default function App() {
    return (
        <ListingDetailScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 60
    }
})