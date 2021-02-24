import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useAuth } from '../hooks/useAuth'
import { useFirestoreDoc } from '../hooks/useFirestore'
import TextInputComp from '../components/textInputcomp'

const SignInScreen = () => {
    const [number, setNumber] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Get your groceries with nectar</Text>
            <TextInputComp val={number} setVal={setNumber}></TextInputComp>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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