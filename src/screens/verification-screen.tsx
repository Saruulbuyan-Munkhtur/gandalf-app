import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextInputComp from '../components/textInputcomp'
import BackArrow from '../svg/back-arrow'

const VerifyScreen = () => {

    const [code, setCode] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter your 4-digit code</Text>
            <TextInputComp val={code} setVal={setCode} name={'Code'} placeholder={'- - - -'}/>
            <View style={styles.arrow}>
                <BackArrow />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        position: 'absolute',
        top: 40,
        left: '5%'
    },
    text: {
        position: 'absolute',
        color: '#181725',
        fontSize: 26,
        top: '30%',
        left: '5%',
    }
})

export default VerifyScreen