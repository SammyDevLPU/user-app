import Colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateAccount: React.FC = () => {
    const message: string = "You will need a Facebook account to use Messenger."

    return (
        <SafeAreaView style={style.parentView}>
            <View style={style.childView}>
                <Pressable
                    onPress={() => {
                        router.back()
                    }}
                >
                    <Ionicons name="arrow-back-sharp" size={22} color={Colors.white} />
                </Pressable>
                <Text style={[style.text, {fontWeight: '600', marginVertical: 10, fontSize: 22}]}>Join Facebook to use Messenger</Text>
            </View>
            <View style={[style.childView, {marginVertical: 10}]}>
                <Image source={require('@/assets/images/createAccount.jpg')} style={style.image} />
                <Text style={{color: Colors.white, marginTop: 4}}>{message}</Text>
            </View>
            <View style={[style.childView, {marginVertical: 10}]}>
                <Pressable
                    onPress={() => {
                        router.navigate('/(auth)/nameScreen')
                    }}
                    style={style.button}
                >
                    <Text style={style.text}>Create new account</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    parentView: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.background_primary_color,
    },
    childView: {
        justifyContent: 'center',
    },
    image: {
        height: 150,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 20
    }, button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        height: 35,
        width: '100%',
        backgroundColor: Colors.primary_color
    },
    text: {
        color: Colors.white
    }

});

export default CreateAccount;