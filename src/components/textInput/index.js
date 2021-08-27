import React, {useState} from 'react';
import styles from './styles'
import {TextInput, View} from "react-native";
import {COLORS} from "../../constants";

const TextField = (prop) => {


    const {placeholder, keyboardType, ...props} = prop

    const [focus, setFocus]=useState(true)


    return (
        <View style={styles.container}>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                keyboardType={keyboardType}
                textAlign={"left"}
                style={styles.textInput}
                {...props}
            />


        </View>
    );
};

export default TextField;
