import React from 'react';
import {Text, View, StyleSheet, Pressable} from "react-native";
import {DrawerItem, DrawerContentScrollView} from "@react-navigation/drawer";
import {AntDesign} from "@expo/vector-icons";
import {COLORS, SIZES} from "../../constants";
import {useNavigation} from "@react-navigation/native";

const DrawerItems = (props) => {

    const navigation = useNavigation()

    return (

        <View style={styles.root}>


            <View style={styles.box}>


                <Pressable {...props} onPress={() => props.navigation.closeDrawer()}>

                    <AntDesign name="close" size={34} color="black"/>

                </Pressable>


                <View style={styles.container}>


                    <Pressable onPress={() => {
                        navigation.navigate('successScreen')
                    }} style={styles.signOutContainer}>
                        <Text style={styles.text}>Edit profile</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        navigation.navigate('totalAmountScreen')
                    }} style={styles.signOutContainer}>
                        <Text style={styles.text}>Home</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        navigation.navigate('endTaskScreen')
                    }} style={styles.signOutContainer}>
                        <Text style={styles.text}>Check location</Text>
                    </Pressable>

                </View>


                <Pressable onPress={() => {
                    navigation.navigate('welcomeScreen')
                }} style={styles.signOutContainer}>
                    <Text style={styles.signOutText}>Sign Out</Text>
                </Pressable>


            </View>


        </View>

    );
};

export default DrawerItems;

const styles = StyleSheet.create({

    root: {
        flex: 1,
        justifyContent: 'center',
    },
    box: {
        justifyContent: 'space-between',
        height: SIZES.H * 0.8,
        alignItems: 'flex-start',
        padding: SIZES.body2,
    },

    container: {
        justifyContent: 'center',
        bottom: 100
    },
    text: {
        fontSize: SIZES.body2,
        marginVertical: 20
    },
    signOutText: {
        fontSize: SIZES.body2,
        color: COLORS.red
    },
    signOutContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',

    }
})

