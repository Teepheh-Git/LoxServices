import React from 'react';
import {Text, View} from "react-native";
import Button from "../../components/button";
import styles from "./styles"
import TextField from "../../components/textInput";
import TextButton from "../../components/textButton";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Button
                type={"primary"}
                    title={"SIGN UP"}
                    overrideStyle={styles.signUpButton}
                style={styles.button}
                    onPress={() => {
                console.log("pressed")
            }}/>

            <Text style={styles.orText}>OR</Text>

            <TextField placeholder={"Phone"} keyboardType={"phone-pad"} maxLength={13}/>
            <TextField placeholder={"Password"} keyboardType={"default"} secureTextEntry={true} maxLength={15}/>

            <Button
                type={"primary"}
                title={"LOG IN"}
                overrideStyle={styles.loginButton}
                onPress={() => {
                console.log("pressed")
            }}/>

            <TextButton type={"primary"} title={"Forgot password?"} onPress={()=>{ console.log("pressed")}}/>

        </View>
    );
};

export default LoginScreen;
