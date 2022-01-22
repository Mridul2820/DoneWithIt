import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Button 
                title="Click Me!"
                onPress={() => Alert.alert("Title", 'Message', [
                    {text: "Yes", onPress: () => console.log("Yes")},
                    {text: "no", onPress: () => console.log("No")}
                ])}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
