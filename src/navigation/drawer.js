import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import WelcomeScreen from "../screens/welcomeScreen";
import TotalAmountScreen from "../screens/totalAmountScreen";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerItems from "../components/drawerItems";
import SuccessScreen from "../screens/successScreen";
import EndTaskScreen from "../screens/endTaskScreen";
import {COLORS} from "../constants";
import HomeScreen from "../screens/homeScreen";


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {


    return (
        <Drawer.Navigator
            screenOptions={{
                title: "LOX SERVICES",
                headerStyle: {
                    shadowOpacity: 0, elevation: 0

                }
            }}
            drawerContent={props => <DrawerItems  {...props}/>}
            initialRouteName={"homeScreen"}>
            <Drawer.Screen name={"successScreen"} component={SuccessScreen}/>
            <Drawer.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.black,
                        shadowOpacity: 0, elevation: 0,
                    },
                    title: ''
                }}
                name={"homeScreen"} component={HomeScreen}/>
            <Drawer.Screen


                name={"totalAmountScreen"} component={TotalAmountScreen}/>
        </Drawer.Navigator>

    );
};

export default DrawerNavigation;


