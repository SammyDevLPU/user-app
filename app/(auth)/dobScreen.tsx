import Colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DobScreen: React.FC = () => {
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
                <Text style={style.text}>What's your birthday?</Text>
                <Text
                    numberOfLines={2} 
                    style={{fontSize: 12, color: Colors.white}}
                >
                    Choose your date of birth. You can always make this private later.
                </Text>
            </View>
            <View style={style.inputView}>
                <TextInput
                    placeholder="First name"
                    placeholderTextColor={Colors.text_white}
                    style={[style.textInput, {marginRight: 8}]}
                />
            </View>
            <View style={{marginVertical: 5}}>
                <Pressable
                    onPress={() => {}}
                    style={style.button}
                >
                    <Text style={{color: Colors.white}}>Next</Text>
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
    text: {
        color: Colors.white,
        fontSize: 22,
        fontWeight: '600',
        marginVertical: 10
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    textInput: {
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 14,
        flex: 1,
        borderColor: Colors.text_white,
        height: 40,
    }, button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        height: 35,
        width: '100%',
        backgroundColor: Colors.primary_color
    }
});

export default DobScreen;