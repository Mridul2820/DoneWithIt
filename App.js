import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './app/components/AppText';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WellcomeScreen from './app/screens/WellcomeScreen';

import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
    return (
        <ListingScreen />
    );
}