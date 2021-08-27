import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerItems from "../components/drawerItems";
import {COLORS} from "../constants";
import HomeScreen from "../screens/homeScreen";
import EditProfileScreen from "../screens/editProfileScreen";
import CheckLocationScreen from "../screens/checkLocationScreen";


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
            <Drawer.Screen name={"editProfileScreen"} component={EditProfileScreen}/>
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


                name={"checkLocationScreen"} component={CheckLocationScreen}/>
        </Drawer.Navigator>

    );
};

export default DrawerNavigation;


