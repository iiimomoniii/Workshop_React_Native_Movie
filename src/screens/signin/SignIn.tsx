import { View, Text, Image, StyleSheet, useWindowDimensions,  } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
import { useNavigation } from '@react-navigation/native';
const Logo =  require("../../assets/img/major_logo.jpeg")
// const navigation = useNavigation();
const navigation = useNavigation();

const Signin = () => {

    const {height} = useWindowDimensions();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        //navigation.navigate('Home');
    }
    const onForgotPasswordPressed = () => {
        //navigation.navigate('Home');
    }
    const onRegisterPressed = () => {
        //navigation.navigate('Register');
    }

  return (
    <View style={styles.root}>
        <Image source={Logo} style={[styles.logo]} resizeMode='contain'></Image>
        <Input placeholder={"Username"} value={username} setValue={setUsername} secureTextEntry={false}/>
        <Input placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
        <Button text='Forgot password?' onPress={onForgotPasswordPressed} page="SignInPage" type="forgot"/>
        <Button text='Sign In' onPress={onSignInPressed} page="SignInPage" type='signIn'/>
        <Button text='Register' onPress={onRegisterPressed} page="SignInPage" type="register"/>
    </View>
  )
}

const styles = StyleSheet.create({
    root : {
        flex:1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#000000'
    },
    logo : {
      backgroundColor: '#000000',
      width:'100%',
      height:'50%'
  }
})

export default Signin