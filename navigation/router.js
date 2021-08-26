import React from 'react';
import {StyleSheet} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from "../screens/signUpScreen";
import LoginScreen from "../screens/loginScreen";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "../screens/welcomeScreen";
import ResetPasswordScreen from "../screens/resetPasswordScreen";
import DrawerNavigation from "./drawer";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{title: "LOX SERVICES"}}>

                <Stack.Screen
                    options={{headerShown: false,}}
                    name={'welcomeScreen'}
                    component={WelcomeScreen}
                />

                <Stack.Screen name={'signUpScreen'} component={SignUpScreen}/>
                <Stack.Screen name={'loginScreen'} component={LoginScreen}/>
                <Stack.Screen name={'resetPasswordScreen'} component={ResetPasswordScreen}/>
                <Stack.Screen
                    options={{headerShown: false,}}
                    name={'drawerNavigation'}
                    component={DrawerNavigation}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Router;

const styles = StyleSheet.create({})
