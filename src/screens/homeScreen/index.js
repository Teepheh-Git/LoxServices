import React from 'react';
import {Image, Text, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import {services, duration} from "../../constants/data";
import {Ionicons} from "@expo/vector-icons";
import Button from "../../components/button";
import styles from "./styles"
import {useNavigation} from "@react-navigation/native";


const HomeScreen = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image resizeMode={'contain'} style={styles.image}
                       source={require('../../../assets/icons/banner.jpg')}/>
            </View>
            <View style={styles.orderNowContainer}>
                <Text style={styles.orderNow}>Order Now</Text>

                <View style={styles.taskTitleContainer}>

                    <Text style={styles.taskTitle}>Task Title </Text>
                    <Text style={styles.taskTitle2}>*</Text>

                </View>

                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    useNativeAndroidPickerStyle={false}
                    items={services}
                    style={styles}
                    placeholder={{
                        label: 'Hair Services...',
                        value: null,
                    }}

                />
                <Text style={styles.timeEstimate}>Time estimate</Text>

                <View style={styles.taskTitleContainer}>

                    <Text style={styles.taskTitle3}>Time Estimate </Text>
                    <Text style={styles.taskTitle2}>*</Text>

                </View>

                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    useNativeAndroidPickerStyle={false}
                    items={duration}
                    style={{
                        ...styles,
                        iconContainer: {
                            top: 30,
                            right: 12,
                        },
                    }}
                    Icon={() => {
                        return (
                            <Ionicons name="chevron-down" size={22} color="gray"/>

                        )
                    }}
                    placeholder={{
                        label: '2Hrs-3Hrs',
                        value: null,
                    }}
                />

            </View>

            <Button overrideStyle={styles.button} type="primary" title={"PROCEED"} onPress={() => {
                navigation.navigate('startTaskScreen')

            }}/>

        </View>
    );
};

export default HomeScreen;


