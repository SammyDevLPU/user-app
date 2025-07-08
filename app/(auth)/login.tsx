import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
    return (
        <View style={style.parentView}>
            <Text style={style.text}>
                This is login screen
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    parentView: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    text: {
        alignSelf: 'center',
        borderWidth: 1
    }
})