import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onBackPressed = () => {
        console.warn("back")
    }
    const onRegisterPressed = () => {
        console.warn("register")
    }
    const onTermOfUsePressed = () => {
        console.warn("termOfUse")
    }
    const onPrivacyPressed = () => {
        console.warn("privacy")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <Input placeholder={"Username"} value={username} setValue={setUsername} secureTextEntry={false} />
            <Input placeholder={"Email"} value={email} setValue={setEmail} secureTextEntry={false} />
            <Input placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true} />
            <Input placeholder={"Repeat Password"} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
            <Button text='Register' onPress={onRegisterPressed} page="RegisterPage" type="register" />
            <Button text='Back' onPress={onBackPressed} page="RegisterPage" type='back' />
            <Text style={styles.policy}>By register, you confirm that you accept our{' '}
                <Text style={styles.policyLink} onPress={onTermOfUsePressed} >Terms of Use</Text> and {' '}
                <Text style={styles.policyLink} onPress={onPrivacyPressed} >Privacy Policy</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        margin: 10
    },
    policy: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 250
    },
    policyLink: {
        fontSize: 15,
        color: '#FFA500',
        margin: 20,
        textDecorationLine: 'underline',
    }
})

export default Register