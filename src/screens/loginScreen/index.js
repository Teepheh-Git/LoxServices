import React from 'react';
import {Text, View} from "react-native";
import Button from "../../components/button";
import styles from "./styles"
import TextField from "../../components/textInput";
import TextButton from "../../components/textButton";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView>

            <View style={styles.container}>
                <Button
                    type={"primary"}
                    title={"SIGN UP"}
                    overrideStyle={styles.signUpButton}
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('signUpScreen');
                    }}/>

                <Text style={styles.orText}>OR</Text>

                <TextField placeholder={"Phone"} keyboardType={"phone-pad"} maxLength={13}/>
                <TextField placeholder={"Password"} keyboardType={"default"} secureTextEntry={true} maxLength={15}/>

                <Button
                    type={"primary"}
                    title={"LOG IN"}
                    overrideStyle={styles.loginButton}
                    onPress={() => {
                        navigation.navigate('drawerNavigation');

                    }}/>

                <TextButton type={"primary"} title={"Forgot password?"} onPress={() => {
                    navigation.navigate('resetPasswordScreen');
                }}/>

            </View>

        </KeyboardAwareScrollView>

    );
};

export default LoginScreen;
