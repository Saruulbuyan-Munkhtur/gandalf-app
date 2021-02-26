import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import TextInputComp from '../components/textInputcomp'
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [number, setNumber] = useState('');
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../components/png/foods.png')} />
            </View>
            <View style={styles.scont}>
                <Text style={styles.text}>Get your groceries with nectar</Text>
                <TextInputComp val={number} setVal={setNumber}></TextInputComp>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.circle} />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        backgroundColor: 'white'
    },
    circle: {
        width: 30,
        height: 30,
        backgroundColor: 'orange',
    },
    scont: {
        top: '10%',
        width: '100%',
        height: 500,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        position: 'absolute',
        top: 0,
    },
    text: {
        position: 'absolute',
        color: '#181725',
        fontSize: 26,
        top: '30%',
        left: '5%',
        width: '50%'
    }
})

export default SignInScreen