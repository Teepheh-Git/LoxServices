import React from 'react';
import CountUp from "react-native-countup-component";
import CountDown from "react-native-countdown-component";
import {Text, View} from "react-native";
import {totalAmount} from "../../constants/data";
import styles from "./styles"
import {useNavigation} from "@react-navigation/native";


const TaskCountScreen = () => {


    const navigation = useNavigation()

    const showRandomNumber = (totalAmount) => {

        return totalAmount[Math.floor(Math.random() * totalAmount.length)]
    }

    return (

        <View style={styles.container}>

            <View style={styles.timerContainer}>

                <CountDown
                    size={65}
                    until={10}
                    onFinish={() => {
                        navigation.navigate('endTaskScreen')
                    }}
                    digitStyle={{
                        backgroundColor: '#FFF',
                        height: 150,
                        width: 106,
                        marginVertical: 60,
                        shadowOpacity: 0.4,
                        elevation: 10,
                        shadowOffset: {height: 0.3}
                    }}
                    digitTxtStyle={{color: '#000', fontSize: 65}}
                    timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                    separatorStyle={{color: 'red', marginHorizontal: 20}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: null, s: null}}
                    showSeparator
                />
            </View>


            <View style={styles.amount}>
                <Text style={styles.text}>Amount </Text>
                <Text style={styles.text2}>N{(showRandomNumber(totalAmount))}</Text>

            </View>


        </View>


    );
};

export default TaskCountScreen;

