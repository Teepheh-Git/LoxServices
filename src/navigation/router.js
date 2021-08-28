import React from 'react';
import {StyleSheet} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from "../screens/signUpScreen";
import LoginScreen from "../screens/loginScreen";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "../screens/welcomeScreen";
import ResetPasswordScreen from "../screens/resetPasswordScreen";
import DrawerNavigation from "./drawer";
import StartTaskScreen from "../screens/startTaskScreen";
import TaskCountScreen from "../screens/taskCountScreen";
import EndTaskScreen from "../screens/endTaskScreen";
import SuccessScreen from "../screens/successScreen";
import TotalAmountScreen from "../screens/totalAmountScreen";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    title: "LOX SERVICES",
                    headerStyle: {shadowOpacity: 0, elevation: 0}
                }}>

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
                <Stack.Screen name={'startTaskScreen'} component={StartTaskScreen}/>
                <Stack.Screen name={'taskCountScreen'} component={TaskCountScreen}/>
                <Stack.Screen name={'endTaskScreen'} component={EndTaskScreen}/>
                <Stack.Screen name={'successScreen'} component={SuccessScreen}/>
                <Stack.Screen name={'totalAmountScreen'} component={TotalAmountScreen}/>


            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Router;

const styles = StyleSheet.create({})
