import { View, Text, Image, StyleSheet,  } from 'react-native'
import React, {useState} from 'react'
import Input from '../components/custom/input'
import Button from '../components/custom/button/Button'

const signin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        console.warn("sign in")
    }
    const onForgotPasswordPressed = () => {
        console.warn("forgot password")
    }
    const onRegisterPressed = () => {
        console.warn("register")
    }

  return (
    <View style={styles.root}>
        <Input placeholder={"Username"} value={username} setValue={setUsername} secureTextEntry={false}/>
        <Input placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
        <Button text='Forgot password?' onPress={onForgotPasswordPressed} type="forgot"/>
        <Button text='Sign In' onPress={onSignInPressed} type='signIn'/>
     
        <Button text='Register' onPress={onRegisterPressed} type="register"/>
    </View>
  )
}

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        marginTop:20
    }
})

export default signin