import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {SIZES} from "../../constants";

const Slider = ({item}) => {
    return (
        <View style={styles.slides}>
            <Text style={styles.text}> {item.text} </Text>
        </View>
    );
};
export default Slider;

const styles = StyleSheet.create({
    slides: {
        height: SIZES.H * 0.4,
        width: SIZES.W * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: SIZES.sliderText,
        fontWeight: '700',
        textAlign: 'center'
    }

})
