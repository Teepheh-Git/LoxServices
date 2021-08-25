import React, {useState} from 'react';
import styles from './styles'
import {TextInput, View} from "react-native";
import {COLORS} from "../../constants";

const TextField = (props) => {


    const {placeholder, keyboardType} = props

    const [focus, setFocus]=useState(true)


    return (
        <View style={styles.container}>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                keyboardType={keyboardType}
                maxLength={13}
                textAlign={"left"}
                style={styles.textInput}/>


        </View>
    );
};

export default TextField;
