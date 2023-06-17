// @ts-nocheck
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PostsCard = () => {
    return (
        <View>

            <View className=" rounded-[10px] w-82 h-[500px] shadow-lg bg-[#d35fa1]   m-4">
                <View className="flex-row items-center px-3 pt-3">

                    <View className="w-[62px] h-[62px] bg-slate-400  rounded-full mr-2">
                        <Image source={require('../../assets/profile.png')} />
                    </View>
                    <View className=" flex-1">
                        <Text className="font-bold text-black">Mpendo Dan</Text>
                        <Text className="text-white ">@Mpendo. <Text className="text-[#0060D0]">Follow</Text></Text>
                    </View>
                    <TouchableOpacity ><Image source={require('../../assets/twitter.png')} className="w-[27.58px] h-[21.24px] " /></TouchableOpacity>

                </View>
                <Text className="text-white text-[13px] px-3 pt-2"> In the groooooove</Text>
                <Text className="text-[13px] text-[#0060D0] px-3">@MOTL <Text className=" text-white"> let’s go.</Text> </Text>
                <View className="w-80 h-[236px] bg-gray-500 rounded-[10px] items-center m-5">

                    <Image source={require('../../assets/imagecenter.png')} className="w-80  h-[236px]" />
                </View>
                <Text className="text-white  text-xsm pl-3 opacity-60"> 7:30 PM Dec 27, 2022</Text>
                <View className="border-[0.3px] px-3 border-white w-82 m-1"></View>

                <View className="flex-row  justify-around">

                    <View className="flex-row items-center space-x-2 pl-3">
                        <TouchableOpacity><Image source={require('../../assets/heart.png')} /></TouchableOpacity>

                        <Text className="text-white">
                            400
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-2 pl-3">
                        <TouchableOpacity><Image source={require('../../assets/like.png')} /></TouchableOpacity>

                        <Text className="text-white">
                            200
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-2 pl-3">
                        <TouchableOpacity><Image source={require('../../assets/share.png')} /></TouchableOpacity>

                        <Text className="text-white">
                            300
                        </Text>
                    </View>
                </View>
                <View className="w-[35\30px] h-[30px] bg-[#8b367b] rounded-[25px] items-center m-2 justify-center">
                    <Text className="text-white text-[14px]">Read 99 replies</Text>
                </View>

            </View>


        </View>
    )
}

export default PostsCard