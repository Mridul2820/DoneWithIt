import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const ListItem = ({ image, title, subTitle, onPress }) => {
    return (
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={colors.light}
        >
            <View style={styles.container}>
                <Image 
                    source={image}
                    style={styles.image}
                />
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: '500'
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem
