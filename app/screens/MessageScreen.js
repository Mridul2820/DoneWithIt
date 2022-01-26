import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListDeleteAction from '../components/ListDeleteAction'
import ListItem from '../components/ListItem'
import ListSeparator from '../components/ListSeparator'
import Screen from '../components/Screen'

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handelDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }

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
                        onPress={() => console.log('selected', item )}
                        renderRightActions={() => 
                            <ListDeleteAction 
                                onPress={() => handelDelete(item)} 
                            />
                        }
                    />
                }
                ItemSeparatorComponent={ListSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages(initialMessages)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})

export default MessageScreen
