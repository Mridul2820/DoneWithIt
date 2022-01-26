import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const ListItem = ({ image, title, subTitle, onPress, renderRightActions, IconComponent }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image 
                        source={image}
                        style={styles.image}
                    />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>
                            {title}
                        </AppText>
                        {subTitle && 
                            <AppText style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500'
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem
