import React from 'react';
import {Text, View} from "react-native";
import Button from "../../components/button";
import styles from "./styles"
import TextField from "../../components/textInput";
import TextButton from "../../components/textButton";

const ResetPasswordScreen = () => {


    return (
        <View style={styles.container}>


            <TextField placeholder={"Phone"} keyboardType={"phone-pad"} maxLength={13}/>
            <Button
                type={"primary"}
                title={"RESET"}
                overrideStyle={styles.resetButton}
                style={styles.button}
                onPress={() => {
                    console.log("pressed")
                }}/>


            <View style={{flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'space-around',}}>


                <TextButton activeOpacity={1} type={"primary"} title={"Don't have an account?   "}/>
                <TextButton type={"secondary"} title={"  Sign Up"} onPress={() => {
                    console.log("pressed")
                }}/>
            </View>
        </View>
    );
};

export default ResetPasswordScreen;
