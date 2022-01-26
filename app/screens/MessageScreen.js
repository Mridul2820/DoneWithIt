import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require('../assets/mridul.jpg')
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require('../assets/mridul.jpg')
    }
]

const MessageScreen = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default MessageScreen