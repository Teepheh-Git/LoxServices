import React from 'react';
import {Pressable, Text, View} from "react-native";
import MapView from "react-native-maps";
import {Entypo, Feather} from "@expo/vector-icons";
import Button from "../../components/button";
import {useNavigation} from "@react-navigation/native";
import {location} from "../../constants/data";
import {places} from "../../constants/data";
import styles from "./styles"


const CheckLocationScreen = () => {
    const navigation = useNavigation()

    const today = new Date();
    const date = (today.getMonth() + 1) + '.' + today.getDate() + '.' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes()
    const dateTime = date + ' ' + time;

    const showRandomLocation = (location) => {

        return location[Math.floor(Math.random() * location.length)]
    }

    return (
        <View style={styles.container}>

            <View style={styles.root}>
                <Text style={styles.text}>LIVE LOCATION</Text>
                <Text style={styles.text2}>Here you can change your location</Text>
            </View>
            <Text style={styles.text3}> {dateTime}</Text>
            <Text style={styles.text4}> {(showRandomLocation(places))}</Text>


            <View style={styles.box}>


                <View style={styles.mapContainer}>
                    <MapView style={styles.map}
                             provider={MapView.PROVIDER_GOOGLE}>

                    </MapView>
                </View>

                <Pressable style={styles.location} onPress={() => alert('Feature coming soon')}>
                    <Entypo name="dot-single" size={34} color="#5A6CB5"/>
                    <Text style={styles.locationText}>Your Location</Text>
                </Pressable>
                <Pressable style={styles.location} onPress={() => alert('feature coming soon')}>
                    <Entypo name="dot-single" size={34} color="red"/>
                    <Text style={styles.locationText}>Change Location</Text>
                </Pressable>
                <Pressable style={styles.location2} onPress={() => alert('feature coming soon')}>
                    <Feather name="droplet" size={15} color="black"/>

                    <Text style={styles.locationText}> {(showRandomLocation(location))}</Text>
                </Pressable>


            </View>
            <Button title={"HOME"} onPress={() => {
                navigation.navigate('homeScreen')
            }} overrideStyle={styles.button} type={"primary"}/>


        </View>
    );
};

export default CheckLocationScreen;

