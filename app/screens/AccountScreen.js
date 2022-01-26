import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Icon from '../components/Icon'

import ListItem from '../components/ListItem'
import ListSeparator from '../components/ListSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems = [
    { 
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgraoldColor: colors.primary
        }
    },
    { 
        title: "My Messages",
        icon: {
            name: "email",
            backgraoldColor: colors.secondary
        }
    }
]

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Mridul Panda"
                    subTitle="contact@mridul.tech"
                    image={require('../assets/mridul.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListSeparator}

                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}  
                                    backgroundColor={item.icon.backgraoldColor} 
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem 
                title="Logout"
                IconComponent={
                    <Icon 
                        name='logout'
                        backgroundColor='#ffe66d'
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20,
    }
})

export default AccountScreen
