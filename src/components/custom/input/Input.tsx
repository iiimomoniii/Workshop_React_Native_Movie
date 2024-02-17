import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'
import React from 'react'

interface InputProps extends TextInputProps {
    value: string;
    setValue: (text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
  }

const Input: React.FC<InputProps> = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} style={styles.input} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {

    }
})

export default Input