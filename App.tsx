import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image ,useWindowDimensions} from 'react-native'
import Navigation from './src/navigation'

import SignIn from './src/screens/signin/SignIn' 
import Register from './src/screens/register'
import Confirm from './src/screens/confirm/Confirm'

const App = () => {


  return (
    <SafeAreaView style={[styles.root]}>
        <SignIn/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //Base Background
    // backgroundColor: '#000000'
  }
})

export default App