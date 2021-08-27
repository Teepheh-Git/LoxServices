import React from 'react';
import {Text, View} from "react-native";
import Button from "../../components/button";
import styles from "./styles"
import TextField from "../../components/textInput";
import TextButton from "../../components/textButton";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const SignUpScreen = () => {

    const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView>

            <View style={styles.container}>


                <Button
                    type={"primary"}
                    title={"LOGIN"}
                    overrideStyle={styles.signUpButton}
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('loginScreen')
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
                        navigation.navigate('loginScreen')
                        alert("Sign Up Successful, Please Login")
                    }}/>

                <TextButton activeOpacity={1} type={"primary"} title={"By joining you agree to our"}/>
                <TextButton type={"secondary"} title={"Terms and Privacy"} onPress={() => {
                    console.log("pressed")
                }}/>


            </View>
        </KeyboardAwareScrollView>

    );
};

export default SignUpScreen;
