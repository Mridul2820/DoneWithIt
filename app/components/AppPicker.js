import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && 
                        <MaterialCommunityIcons 
                            name={icon} 
                            color={colors.medium}
                            size={24}
                            style={styles.icon}
                        /> 
                    }
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        color={colors.medium}
                        size={24}
                    /> 
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button 
                        title="Close"  
                        onPress={() => setModalVisible(false)} 
                    />
                    <FlatList 
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>

            </Modal>
        </>
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
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
})

export default AppPicker
