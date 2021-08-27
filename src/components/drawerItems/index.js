import React from 'react';
import {Text, View, Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import styles from "./styles"

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
                        navigation.navigate('editProfileScreen')
                    }} style={styles.signOutContainer}>
                        <Text style={styles.text}>Edit profile</Text>
                    </Pressable>


                    <Pressable onPress={() => {
                        navigation.navigate('homeScreen')
                    }} style={styles.signOutContainer}>
                        <Text style={styles.text}>Home</Text>
                    </Pressable>

                    <Pressable onPress={() => {
                        navigation.navigate('checkLocationScreen')
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


