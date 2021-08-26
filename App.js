import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from "./screens/welcomeScreen";
import SignUpScreen from "./screens/signUpScreen";
import StartTaskScreen from "./screens/startTaskScreen";
import SuccessScreen from "./screens/successScreen";
import TotalAmountScreen from "./screens/totalAmountScreen";
import DrawerNavigation from "./navigation/drawer";
import Router from "./navigation/router";

export default function App() {
    return (
        <View style={styles.container}>

            <Router/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
});
