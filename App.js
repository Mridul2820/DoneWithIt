import React from 'react';

import AppText from './app/components/AppText';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WellcomeScreen from './app/screens/WellcomeScreen';

import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
    return (
        <AppTextInput 
            placeholder="Search"
            icon="map-search-outline"
        />
    );
}