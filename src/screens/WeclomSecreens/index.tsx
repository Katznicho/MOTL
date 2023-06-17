// @ts-nocheck
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View className="h-full bg-[#ff7878] w-full  items-center">
            <ImageBackground source={require('../../assets/welcomeimage.png')} className="h-[645px] w-full items-center flex-1 " >
                <Image source={require("./../../assets/circles.png")} className="justify-center  mt-5  " />
                <View className="items-center">
                    <Text className="text-white text-[20px] font-bold">WELCOME TO THE NEW </Text>
                    <Text className="text-white text-[20px] font-bold">
                        MOTL APP
                    </Text>

                    <View className="border border-[#50165F] items-center w-14 "></View>
                </View>
            </ImageBackground>
            <Text className=" text-white  items-center justify-center px-8 text-[15px] font-semibold ">Create your own  App experience, access top stories, buzz, highlights and more from your </Text>
            <ImageBackground source={require('../../assets/welcomebg.png')} className=" items-center w-full   h-60">
                <Text className="text-white text-[15px] font-semibold">favourite players and teams. </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LocationScreen')}
                    className="w-[360px] h-[51px] items-center justify-center  bg-[#FF0000] rounded-[30px] mt-14 ">
                    <Text className="text-white font-bold text-[15px]">Get Started</Text>
                </TouchableOpacity>

                <Image
                    source={require('../../assets/bottomlogo.png')}
                    className="absolute bottom-0"
                />
            </ImageBackground>

        </View>
    )
}

export default WelcomeScreen