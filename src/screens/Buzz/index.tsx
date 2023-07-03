// @ts-nocheck
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import PostsCard from '../../components/Posts/PostsCard'
import axios from 'axios';
import CryptoJS from 'crypto-js';
import config from '../../../config';



const BuzzScreen = () => {

    return (
        <ImageBackground source={require("../../assets/background.png")} className=" h-full">
            <ScrollView>

                <View className="w-full h-42 bg-[#FF8F8F]">
                    <Text className=" font-black text-[18px] text-[#50165F] m-2 border-b-[3px] border-[#50165F]">
                        JOIN THE CONVERSATION!
                    </Text>
                    <View className=" flex-row justify-around  items-center m-2   border-b-[0.3px]">


                        <TouchableOpacity><Image source={require("../../assets/LinkedIn.png")} className="w-[32px] h-[37px]" /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/Facebook.png")} className="w-[32px] h-[37px]" /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/youtube.png")} className="w-[31px] h-[29px]" /></TouchableOpacity>
                        <TouchableOpacity><Image source={require('../../assets/Instagram.png')} className="w-[39px] h-[27px]" /></TouchableOpacity>

                        <TouchableOpacity ><Image source={require('../../assets/twitter.png')} className="w-[27.58px] h-[21.24px]" /></TouchableOpacity>

                    </View>



                </View>

                <View className="bg-[#eb8199]  h-full w-full mt-3 items-center">
                    <PostsCard />
                    {/* <PostsCard />
                    <PostsCard /> */}
                </View>


            </ScrollView>


        </ImageBackground >
    )
}

export default BuzzScreen