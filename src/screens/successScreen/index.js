import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import styles from "./styles"
import {useNavigation} from "@react-navigation/native";

const SuccessScreen = () => {

    const navigation = useNavigation()
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('totalAmountScreen')}>
            <View style={styles.root}>


                <Image style={styles.img} resizeMode={"contain"} source={require('../../../assets/icons/check.png')}/>
                <Text style={styles.text}>ENDED SUCCESSFULLY</Text>

            </View>

        </Pressable>
    );
};

export default SuccessScreen;
