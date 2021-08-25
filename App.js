import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button'
import TextField from "./components/textInput";
import TextButton from "./components/textButton";
import LoginScreen from "./screens/loginScreen";
import SignUpScreen from "./screens/signUpScreen";
import ResetPasswordScreen from "./screens/resetPasswordScreen";

export default function App() {
  return (
    <View style={styles.container}>



<ResetPasswordScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
