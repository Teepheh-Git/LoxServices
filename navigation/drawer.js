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


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {


    return (
        <Drawer.Navigator
            screenOptions={{title: "LOX SERVICES"}}
            drawerContent={props => <DrawerItems  {...props}/>}
            initialRouteName={"Welcome"}>
            <Drawer.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.black
                    },
                }}
                name={"successScreen"} component={SuccessScreen}/>
            <Drawer.Screen name={"totalAmountScreen"} component={TotalAmountScreen}/>
            <Drawer.Screen name={"endTaskScreen"} component={EndTaskScreen}/>
        </Drawer.Navigator>

    );
};

export default DrawerNavigation;


