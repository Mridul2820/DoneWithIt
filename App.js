import React, { useState } from 'react';

import AppText from './app/components/AppText';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WellcomeScreen from './app/screens/WellcomeScreen';

import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);

    return (
        <Screen>
            <AppPicker 
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                items={categories}
                icon="apps"
                placeholder="Category"
            />
            <AppTextInput
                placeholder="Email" 
                icon="email"
            />
        </Screen>
    );
}