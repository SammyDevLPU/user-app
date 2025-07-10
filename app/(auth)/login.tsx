import Colors from '@/constants/colors';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Login: React.FC  = () => {
    return (
        <View style={style.parentView}>

           <View style={[style.childView, {flex: 1, flexDirection: 'row'}]}>
            <Text style={style.text}>{'English (India)'}</Text>
            <Pressable
                onPress={() => {
                    console.log('Dropdown')
                }}
            >
                <MaterialIcons name='keyboard-arrow-down' size={18} color={Colors.text_white} />
            </Pressable>
           </View>

           <View style={[style.childView, {flex: 2}]}>
            <FontAwesome6 name="facebook-messenger" size={50} color={Colors.primary_color} />
           </View>

           <View style={[style.childView, {flex: 5}]}>
            <TextInput
                placeholder='Mobile number or email'
                placeholderTextColor={Colors.text_white}
                style={style.textInput}
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor={Colors.text_white}
                style={style.textInput}
            />
            <Pressable
                style={style.loginBtn}
                onPress={() => {
                    console.log('Btn Pressed.')
                }}
            >
                <Text style={{color: Colors.white}}>Log in</Text>
            </Pressable>
            <Text style={style.forgotPass}>Forgot Password?</Text>
           </View>

           <View style={[style.childView, {flex: 2}]}>
            <Pressable
                onPress={() => {
                    router.navigate('/(auth)/createAccount')
                }}
                style={style.createAccountBtn}
            >
                <Text style={{color: Colors.primary_color}}>Create new account</Text>
            </Pressable>
            <View style={style.metaLogo}>
                <FontAwesome6 name='meta' size={12} color={Colors.white} />
                <Text style={{color: Colors.white, fontSize: 12, marginLeft: 5}}>Meta</Text>
            </View>
           </View>
        </View>
    )
}

const style = StyleSheet.create({
    parentView: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.background_primary_color,
        justifyContent: 'center',
    },
    childView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: Colors.text_white,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 8,
        height: 50,
        width: '98%',
        marginVertical: 7,
        color: Colors.white,
        paddingLeft: 10
    },
    loginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 50,
        width: '98%',
        backgroundColor: Colors.primary_color,
        marginVertical: 5
    },
    createAccountBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        height: 35,
        width: '98%',
        borderWidth: 1,
        borderColor: Colors.primary_color
    },
    forgotPass: {
        color: Colors.white,
        marginVertical: 5
    },
    metaLogo: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login;