import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles"
import {AntDesign} from '@expo/vector-icons';
import {COLORS} from "../../constants";
import Button from "../../components/button";
import {useNavigation} from "@react-navigation/native";

const StartTaskScreen = () => {


    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <View style={styles.box}>


                <View style={styles.root}>
                    <AntDesign name="exclamationcircleo" size={120} color={COLORS.red}/>
                    <Text style={styles.text}>start Task?</Text>

                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        type="secondary"
                        title={"NO"}
                        overrideStyle={styles.noButton}
                        onPress={() => {
                            navigation.goBack();
                        }}/>

                    <Button
                        type="primary"
                        title={"YES"}
                        overrideStyle={styles.yesButton}
                        onPress={() => {
                            navigation.navigate('taskCountScreen')
                        }}/>
                </View>

            </View>


        </View>
    );
};

export default StartTaskScreen;
