import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image ,useWindowDimensions} from 'react-native'

import SignIn from './src/screens/SignIn' 

const Logo =  require("../majorcineplex/src/assets/img/major_logo.jpeg")

const App = () => {
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.root]}>
      <Image source={Logo} style={[styles.logo]} resizeMode='contain'></Image>
      <SignIn></SignIn>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex:1, 
    backgroundColor: '#000000'
  },
  logo : {
    backgroundColor: '#000000',
    width:'100%',
    height:'50%'
}
})

export default App