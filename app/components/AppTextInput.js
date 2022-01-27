import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import Screen from './Screen'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <Screen>
            <View style={styles.container}>
                {icon && 
                    <MaterialCommunityIcons 
                        name={icon} 
                        color={colors.medium}
                        size={24}
                        style={styles.icon}
                    />
                }
                <TextInput 
                    style={styles.textInput}
                    {...otherProps}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        color: colors.dark,
        width: '100%',
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput
