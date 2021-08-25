import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles"

const SuccessScreen = () => {
    return (
        <View style={styles.container}>

            <Image style={styles.img} source={require('../../assets/icons/success.jpg')}/>
            <Text style={styles.text}>ENDED SUCCESSFULLY</Text>


        </View>
    );
};

export default SuccessScreen;
