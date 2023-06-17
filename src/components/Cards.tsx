// @ts-nocheck
import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Card from './Card'
import SecondCard from './SecondCard'

const Cards = () => {
    return (
        <ScrollView clasName="h-full">
            <View className="bg-[#FE7878] w-full  flex-row h-[279px]   ">
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    <Card />
                    <SecondCard />
                    <SecondCard />
                    <SecondCard />

                </ScrollView>

            </View>
            <ScrollView className="bg-[#eb7e96]  h-full  mt-2">
                <View >

                    <View className="flex-row  justify-between px-5 p-5 items-center"><Text className="text-[#511760] font-extrabold text-[24px]"> WHAT’S LATEST</Text>
                        <View className=" border rounded-full w-[37px] h-[37px] items-center justify-center"><Image source={require("../assets/icon.png")} className="" /></View>



                    </View>
                    <ImageBackground source={require("../assets/centerimg.png")} className="relative  w-[350px] ml-5 items-center h-[400px]" >
                        <Text className="text-white font-extrabold text-[20px] absolute bottom-0 "> MATCH OF THE DAY GOES TO BERUGA FC Vs OLYMPIACOS FC.</Text>

                    </ImageBackground>

                </View>
            </ScrollView>

        </ScrollView>
    )
}

export default Cards