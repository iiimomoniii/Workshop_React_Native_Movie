import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image ,useWindowDimensions} from 'react-native'

import SignIn from './src/screens/signin/SignIn' 
import Register from './src/screens/register'

const App = () => {


  return (
    <SafeAreaView style={[styles.root]}>
      {/* <SignIn/> */}
      <Register/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000000'
  }
})

export default App