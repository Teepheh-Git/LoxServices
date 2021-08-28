import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Platform, Pressable, Text, View} from "react-native";
import * as ImagePicker from "expo-image-picker";
import TextField from "../../components/textInput";
import RNPickerSelect from "react-native-picker-select";
import {cards, dates} from "../../constants/data";
import {Entypo, EvilIcons, Feather} from "@expo/vector-icons";
import Button from "../../components/button";
import styles from "./styles"


const EditProfileScreen = () => {


    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    return (
        <View style={styles.container}>

            <Text style={styles.text}>Get Started</Text>

            <Pressable onPress={pickImage} style={styles.imgPlaceholder}>
                <ImageBackground style={{width: 125, height: 97}}
                                 source={require('../../../assets/icons/imgPlaceholder.png')}>
                    {image && <Image source={{uri: image}} style={{width: 125, height: 97}}/>}
                </ImageBackground>
            </Pressable>

            <View style={styles.taskTitleContainer}>
                <Text style={styles.taskTitle3}>Full name </Text>
                <Text style={styles.taskTitle2}>*</Text>
            </View>
            <View style={styles.textInputView}>

                <TextField style={styles.textInput} textAlign={"center"} placeholder={"AMINA LATEEF"}
                           keyboardType={"default"}/>

            </View>


            <View style={styles.taskTitleContainer2}>
                <Text style={styles.taskTitle4}>Date of Birth</Text>
                <Text style={styles.taskTitle5}>*</Text>
            </View>

            <View style={styles.textInputView}>
                <View style={styles.cardContainer}>
                    <EvilIcons name="calendar" size={24} color="black"/>
                </View>

                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    useNativeAndroidPickerStyle={false}
                    items={dates}
                    style={{
                        ...styles,
                    }}
                    placeholder={{
                        label: '23 Jun 2003',
                        value: null,
                    }}
                />


                <View style={styles.cardContainer}>
                    <Feather name="credit-card" size={22} color="gray"/>
                </View>

                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    useNativeAndroidPickerStyle={false}
                    items={cards}
                    style={{
                        ...styles,
                        iconContainer: {
                            top: 15,
                            right: 12,
                        },
                    }}
                    Icon={() => {
                        return (
                            <Entypo name="plus" size={20} color="black"/>
                        )
                    }}
                    placeholder={{
                        label: 'Add Debit / Credit Card',
                        value: null,
                    }}
                />

                <Button onPress={() => {
                    alert('Saved Successfully')
                }} title={"SAVE"} type={"primary"} overrideStyle={styles.button}/>

            </View>


        </View>
    );
};

export default EditProfileScreen;

