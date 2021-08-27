import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants";

const CheckLocationScreen = () => {
    return (
        <View style={styles.container}>
            <Text> Check Location Screen</Text>
        </View>
    );
};

export default CheckLocationScreen;

const styles = StyleSheet.create({

    container: {
        height: SIZES.H,
        backgroundColor: COLORS.white

    }
})
