import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/home'
import SignIn from '../screens/signin'
import Register from '../screens/register'
import Confirm from '../screens/confirm'
import ForgotPassword from '../screens/forgotPassword'
import ResetPassword from '../screens/resetPassword'

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen  name="SignIn" component={SignIn}></Stack.Screen>
                <Stack.Screen  name="Register" component={Register}></Stack.Screen>
                <Stack.Screen  name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
                <Stack.Screen  name="Confirm" component={Confirm}></Stack.Screen>
                <Stack.Screen  name="ResetPassword" component={ResetPassword}></Stack.Screen>
                <Stack.Screen  name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation