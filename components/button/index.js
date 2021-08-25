import React from 'react';
import { Text, TouchableOpacity, View} from "react-native";
import {COLORS} from '../../constants'
import styles from './styles'

const Button = (props) => {
    const {type, title, onPress} = props;

    const backGroundColor = type === 'primary' ? COLORS.black : COLORS.white;
    const textColor = type === 'primary' ? COLORS.white : COLORS.black;


    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.button, {backgroundColor: backGroundColor}]}
                onPress={onPress}>
                <Text style={[styles.text, {color: textColor}]}> {title} </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

