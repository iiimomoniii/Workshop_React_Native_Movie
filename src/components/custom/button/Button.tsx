import { View, Text, StyleSheet, Pressable, TextInputProps } from 'react-native'
import React from 'react'

interface ButtonProps {
    onPress: Function;
    text: string;
    type: string;
  }

const Button: React.FC<ButtonProps> = ({ onPress, text, type }) => {
  return (
    <Pressable onPress={()=>{onPress()}} style={[styles[`Container_${type}`], styles[`Button_${type}`]]}>
      <Text style={[styles.text, styles[`Text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles: {[key:string]:any} = StyleSheet.create({
    Container_signIn: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_forgot: {
        width: '90%',
        padding:15,
        marginVertical:5,
        alignItems:'flex-end',
        borderRadius:5
    },
    Container_register: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Button_signIn : {
        backgroundColor: '#f44336',
    },
    Button_forgot : {
        backgroundColor: '#000000',
    },
    Button_register : {
        backgroundColor: '#000000',
    },
    text: {
        fontWeight:'bold',
        color:'white'
    },
    Text_signIn : {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    Text_forgot : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_register : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
})

export default Button