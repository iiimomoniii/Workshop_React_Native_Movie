import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
const Confirm = ({ navigation }: { navigation: any }) => {
    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
        console.warn("confirm")
    }
    const onResendCodePressed = () => {
        console.warn("resend code")
    }
    const onBackPressed = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
            <Input placeholder={"Enter your confirmation code"} value={code} setValue={setCode} secureTextEntry={false} />
            <Button text='Confirm Code' onPress={onConfirmPressed} page="ConfirmPage" type="confirm" />
            <Button text='Resend Code' onPress={onResendCodePressed} page="ConfirmPage" type="resend" />
            <Button text='Back' onPress={onBackPressed} page="ConfirmPage" type="back" />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        margin: 10
    }
})

export default Confirm