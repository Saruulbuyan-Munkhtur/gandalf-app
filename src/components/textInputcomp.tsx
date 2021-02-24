import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

const TextInputComp: React.FC<any> = ({ val, setVal, name, placeholder }) => {

    return (
        <View style={styles.cont}>
            <View style={styles.scont}>
                <Text style={styles.text}> {name}</Text>
                <TextInput style={styles.textinput} onChangeText={text => setVal(text)} value={val} placeholder={placeholder}></TextInput>
                <View style={styles.line}></View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    cont: {
        width: '90%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: '#7C7C7C',
        fontWeight: '600',
        position: 'absolute',
        left: 0,
        top: -20,
    },
    scont: {
        width: '100%',
        height: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: '#E2E2E2',
        bottom: 5,
    },
    textinput: {
        width: '100%',
        height: 50,
    }
})

export default TextInputComp