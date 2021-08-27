import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import styles from "./styles"
import Button from "../../components/button";
import {totalAmount} from '../../constants/data'
import {useNavigation} from "@react-navigation/native";


const TotalAmountScreen = () => {

    const navigation = useNavigation()

    const showRandomNumber = (totalAmount) => {

        return totalAmount[Math.floor(Math.random() * totalAmount.length)]
    }
    return (
        <View style={styles.container}>

            <View style={styles.root}>
                <Text style={styles.text}>Total Amount: </Text>
                <Text style={styles.text}>N{(showRandomNumber(totalAmount))}</Text>

            </View>


            <Button
                type={"primary"}
                title={"CLOSE"}
                overrideStyle={styles.closeButton}
                style={styles.button}
                onPress={() => {
                    navigation.navigate('homeScreen')
                }}/>


        </View>
    );
};

export default TotalAmountScreen;
