import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ListDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name='trash-can-outline'
                    color='white'
                    size={30}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.denger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListDeleteAction
