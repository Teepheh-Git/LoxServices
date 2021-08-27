import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from "./src/screens/welcomeScreen";
import SignUpScreen from "./src/screens/signUpScreen";
import StartTaskScreen from "./src/screens/startTaskScreen";
import SuccessScreen from "./src/screens/successScreen";
import TotalAmountScreen from "./src/screens/totalAmountScreen";
import DrawerNavigation from "./src/navigation/drawer";
import Router from "./src/navigation/router";
import HomeScreen from "./src/screens/homeScreen";
import TaskCountScreen from "./src/screens/taskCountScreen";

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
        justifyContent: 'center',
    },
});
