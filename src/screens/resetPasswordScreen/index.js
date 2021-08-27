import React from 'react';
import {View} from "react-native";
import Button from "../../components/button";
import styles from "./styles"
import TextField from "../../components/textInput";
import TextButton from "../../components/textButton";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const ResetPasswordScreen = () => {

    const navigation = useNavigation()
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <TextField placeholder={"Phone"} keyboardType={"phone-pad"} maxLength={13}/>
                <Button
                    type={"primary"}
                    title={"RESET"}
                    overrideStyle={styles.resetButton}
                    style={styles.button}
                    onPress={() => {
                        alert('Password Reset Instruction Sent ')
                    }}/>

                <View style={styles.root}>
                    <TextButton activeOpacity={1} type={"primary"} title={"Don't have an account?   "}/>
                    <TextButton type={"secondary"} title={"  Sign Up"} onPress={() => {
                        navigation.navigate('signUpScreen');

                    }}/>
                </View>
            </View>
        </KeyboardAwareScrollView>

    );
};

export default ResetPasswordScreen;
