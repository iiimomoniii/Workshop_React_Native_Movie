import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
const Confirm = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
      console.warn("confirm")
  }
  const onResendCodePressed = () => {
      console.warn("resend code")
  }
  const onBackPressed = () => {
      console.warn("back")
  }

  return (
      <View style={styles.root}>
          <Text style={styles.title}>Forgot your password</Text>
          <Input placeholder={"Enter your email"} value={code} setValue={setCode} secureTextEntry={false} />
          <Button text='Confirm Email' onPress={onConfirmPressed} page="ForgotPage" type="confirm_email" />
          <Button text='Back To Sign In' onPress={onBackPressed} page="ForgotPage" type="back"/>
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
  }
})

export default Confirm