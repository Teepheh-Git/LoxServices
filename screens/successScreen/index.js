import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles"

const SuccessScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.root}>


                <Image style={styles.img} resizeMode={"contain"} source={require('../../assets/icons/check.png')}/>
                <Text style={styles.text}>ENDED SUCCESSFULLY</Text>

            </View>

        </View>
    );
};

export default SuccessScreen;
