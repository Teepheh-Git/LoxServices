import React from 'react';
import {View} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Slider from "../../components/slider";
import styles from "./styles"
import {COLORS} from "../../constants";
import Button from "../../components/button";
import {slides} from "../../constants";
import {useNavigation} from "@react-navigation/native";


const WelcomeScreen = () => {

    const navigation = useNavigation()
    return (

        <View style={styles.container}>
            <View style={styles.root}>
                <AppIntroSlider
                    data={slides}
                    showNextButton={false}
                    showdoneButton={false}
                    dotStyle={{backgroundColor: COLORS.gray}}
                    activeDotStyle={{backgroundColor: COLORS.indicatorBlue}}
                    renderItem={({item}) => <Slider item={item}/>}/>

            </View>

            <Button
                type={"primary"}
                title={"SIGN UP"}
                overrideStyle={styles.signUpButton}
                onPress={() => {
                    navigation.navigate('signUpScreen')
                }}/>
            <Button
                type={"secondary"}
                title={"LOG IN"}
                overrideStyle={styles.loginButton}
                onPress={() => {
                    navigation.navigate('loginScreen')
                }}/>

        </View>
    );
};

export default WelcomeScreen;
