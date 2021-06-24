import React from 'react';
import { 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    TouchableOpacityProps, 
    View,
    Image
} from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import userImg from '../assets/diego.jpg'

export function Header() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Diego</Text>
            </View>
            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },

    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    }
})