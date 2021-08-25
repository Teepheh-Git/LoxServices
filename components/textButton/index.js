import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles"
import {COLORS} from "../../constants";

const TextButton = (props) => {

    const {onPress, title, type} = props


    const textColor = type === 'primary' ? COLORS.gray : COLORS.red


    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.6}>


                <Text style={[styles.text, {color: textColor}]}>{title}</Text>

            </TouchableOpacity>

        </View>
    );
};

export default TextButton;
