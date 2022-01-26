import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListItem from '../components/ListItem'
import ListSeparator from '../components/ListSeparator'
import Screen from '../components/Screen'

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
        <Screen>
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
                ItemSeparatorComponent={ListSeparator}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})

export default MessageScreen
