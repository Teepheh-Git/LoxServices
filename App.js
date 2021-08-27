import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from "./src/navigation/router";
import {enableScreens} from 'react-native-screens';

enableScreens(false);

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
