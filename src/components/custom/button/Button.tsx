import { View, Text, StyleSheet, Pressable, TextInputProps } from 'react-native'
import React from 'react'

interface ButtonProps {
    onPress: Function;
    text: string;
    page: string;
    type: string;
  }

const Button: React.FC<ButtonProps> = ({ onPress, text, page, type }) => {
  return (
    <Pressable onPress={()=>{onPress()}} style={[styles[`Container_${page}_${type}`], styles[`Button_${page}_${type}`]]}>
      <Text style={[styles.text, styles[`Text_${page}_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles: {[key:string]:any} = StyleSheet.create({
    Container_SignInPage_signIn: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_SignInPage_forgot: {
        width: '90%',
        padding:15,
        marginVertical:5,
        alignItems:'flex-end',
        borderRadius:5
    },
    Container_SignInPage_register: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_RegisterPage_register: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_RegisterPage_back: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Button_SignInPage_signIn : {
        backgroundColor: '#f44336',
    },
    Button_SignInPage_forgot : {
        backgroundColor: '#000000',
    },
    Button_SignInPage_register : {
        backgroundColor: '#000000',
    },
    Button_RegisterPage_register : {
        backgroundColor: '#f44336',
    },
    text: {
        fontWeight:'bold',
        color:'white'
    },
    Text_SignInPage_signIn : {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    Text_SignInPage_forgot : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_SignInPage_register : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_RegisterPage_register : {
        color: '#ffffff',
        fontWeight: 'bold',
    }
})

export default Button