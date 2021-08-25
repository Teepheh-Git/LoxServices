import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button'
import TextField from "./components/textInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Button  type={"primary"} title={"Welcome"} onPress={()=>{
          console.log("pressed")
      }} />

        <TextField placeholder={"Phone"} keyboardType={"phone-pad"} />
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
