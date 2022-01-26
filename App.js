import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './app/components/AppText';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WellcomeScreen from './app/screens/WellcomeScreen';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
    return (
        <AccountScreen />
    );
}