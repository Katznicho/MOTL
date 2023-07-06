// @ts-nocheck
import { View, Text, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const EnableLocationScreen = () => {

    const [location, setLocation] = React.useState(false);
    const [currentLongitude, setCurrentLongitude] = React.useState('...');

    //get current location
    const getLocation = () => {
        //checking if location permission is granted
        if (location) {
            //get current location
            Geolocation.getCurrentPosition(
                //Will give you the current location
                (position) => {
                    //getting the Longitude from the location json
                    const currentLongitude = JSON.stringify(position.coords.longitude);

                    //getting the Latitude from the location json
                    const currentLatitude = JSON.stringify(position.coords.latitude);

                    //Setting Longitude state
                    setCurrentLongitude(currentLongitude);

                    //Setting Longitude state
                    setCurrentLongitude(currentLatitude);
                }
            );
        } else {
            //if location permission is not granted
            //ask for permission
            askForLocationPermission();
        }
    }

    //request for android location permission
    const askForLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'This app needs access to your location',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted == PermissionsAndroid.RESULTS.GRANTED) {
                //console.log('You can use the location');
                //setLocation(true);
                Geolocation.getCurrentPosition(
                    //Will give you the current location
                    (position) => {
                        //getting the Longitude from the location json
                        const currentLongitude = JSON.stringify(position.coords.longitude);

                        //getting the Latitude from the location json
                        const currentLatitude = JSON.stringify(position.coords.latitude);

                        //Setting Longitude state
                        setCurrentLongitude(currentLongitude);

                        //Setting Longitude state
                        setCurrentLongitude(currentLatitude);
                    }
                );
            } else {
                //console.log('Location permission denied');
                Alert.alert("Location Permission Denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };


    //check for location permission
    async function checkLocationPermission() {
        try {
            const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //console.log('You can use the location');
                setLocation(true);
            } else {
                //console.log('Location permission denied');
                askForLocationPermission();
            }
        } catch (err) {
            console.warn(err);
        }
    }
    const enableLcation = () => {
        // checkLocationPermission();
        navigation.navigate('FollowScreen')

    }

    useEffect(() => {
        checkLocationPermission();
        getLocation();
    }, [])

    //request for ios location permission
    const navigation = useNavigation<any>();
    return (
        <>
            <ImageBackground source={require('../../assets/subcriptionbg.png')} className="flex-1     items-center">

                <Image source={require("./../../assets/locationcircles.png")} className="justify-center  mt-5  " />
                <View className="items-center flex-1">
                    <Text className="text-white text-[25px] font-bold">DON’T MISS LIVE GAMES  </Text>
                    <Text className="text-white text-[25px] font-bold"> AND LOCAL </Text>
                    <Text className="text-white text-[25px] font-bold">
                        RECOMMENDATIONS
                    </Text>

                    <View className="border border-[#363CCF] items-center w-14      "></View>
                    <ImageBackground source={require('../../assets/locationimg.png')} className="h-[422px]  relative w-[503px] mt-30 items-center justify-center px-14" >
                        <View className="absolute bottom-0 ">

                            <Text className=" text-white text-[15px] font-[500px]  ">Share location to see what games and events
                            </Text>

                            <Text className=" text-white text-[15px] font-[500px]  ">  are happening near you from the LPTL league.</Text>
                            <Text className=" text-white text-[15px] font-[500px] pt-3 "> The league respects your privacy and will only</Text>
                            <Text className=" text-white text-[15px] font-[500px]  ">use this infomration for these purposes.</Text>

                        </View>

                    </ImageBackground>
                </View>


                <TouchableOpacity onPress={
                    enableLcation


                }
                    className="w-72 h-[51px] items-center justify-center  bg-[#FF0000] rounded-[30px] mt-2 absolute bottom-14 ">
                    <Text className="text-white font-bold text-[21px]">Next </Text>
                </TouchableOpacity>
                <Image
                    source={require('../../assets/bottomlogo.png')}
                    className="absolute bottom-0"
                />


            </ImageBackground></>
    )
}

export default EnableLocationScreen