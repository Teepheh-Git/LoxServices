import React from 'react';
import {Text, View} from "react-native";
import Button from "../../components/button";
import styles from "./styles"
import TextField from "../../components/textInput";
import TextButton from "../../components/textButton";

const SignUpScreen = () => {


    return (
        <View style={styles.container}>


            <Button
                type={"primary"}
                title={"LOGIN"}
                overrideStyle={styles.signUpButton}
                style={styles.button}
                onPress={() => {
                    console.log("pressed")
                }}/>

            <Text style={styles.orText}>OR</Text>

            <TextField placeholder={"Phone"} keyboardType={"phone-pad"} maxLength={13}/>
            <TextField placeholder={"Password"} keyboardType={"default"} secureTextEntry={true} maxLength={15}/>
            <TextField placeholder={"Referral code (optional)"} keyboardType={"default"} maxLength={10}/>

            <Button
                type={"primary"}
                title={"SIGN UP"}
                overrideStyle={styles.loginButton}
                onPress={() => {
                    console.log("pressed")
                }}/>

            <TextButton activeOpacity={1} type={"primary"} title={"By joining you agree to our"}/>
            <TextButton type={"secondary"} title={"Terms and Privacy"} onPress={() => {
                console.log("pressed")
            }}/>

        </View>
    );
};

export default SignUpScreen;
