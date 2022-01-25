import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const Card = ({ title, subTitle, image}) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    detailContainer: {
        padding: 15
    },
    title: {
        marginBottom: 5
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

export default Card
