import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const ListingDetailScreen = () => {
    return (
        <View>
            <Image 
                style={styles.image} 
                source={require('../assets/jacket.jpg')} 
            />
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Red Jacket</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mridul.jpg')}
                        title="Mridul"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 20
    }
})

export default ListingDetailScreen
