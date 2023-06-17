// @ts-nocheck
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EnableLocationScreen = () => {
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


                <TouchableOpacity onPress={() => navigation.navigate('FollowScreen')}
                    className="w-[360px] h-[51px] items-center justify-center  bg-[#FF0000] rounded-[30px] mt-2 absolute bottom-[100px] ">
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