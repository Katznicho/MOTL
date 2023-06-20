import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../WeclomSecreens';
import SubcriptionScreen from '../SubcriptionScreen/Subcription';
import EnableLocationScreen from '../WeclomSecreens/EnableLocationScreen';
import FollowScreen from '../WeclomSecreens/FollowScreen';
import PhoneVerification from '../WeclomSecreens/PhoneVerification';
import PaymentScreen from '../PaymentScreen';
import EnterPin from '../EnterPin';
const Stack = createStackNavigator();
const IntroStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='WelcomeScreen'
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
            />
            <Stack.Screen
                name='SubscribeScreen'
                component={SubcriptionScreen}
            />
            <Stack.Screen
                name='LocationScreen'
                component={EnableLocationScreen}
            />

            <Stack.Screen
                name='FollowScreen'
                component={FollowScreen}
            />
            <Stack.Screen
                name='PhoneVerification'
                component={PhoneVerification}
            />
            <Stack.Screen
                name='EnterPinScreen'
                component={EnterPin}
            />
            <Stack.Screen
                name='PaymentScreen'
                component={PaymentScreen}
            />




        </Stack.Navigator>

    )
}

export default IntroStack

const styles = StyleSheet.create({})