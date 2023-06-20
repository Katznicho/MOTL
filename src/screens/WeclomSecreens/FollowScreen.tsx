// @ts-nocheck

import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import ModalPopup from '../../components/Model';
import { useNavigation } from '@react-navigation/native';

const FollowScreen = () => {
    const navigation = useNavigation<any>();
    const [modalVisible, setModalVisible] = useState(false);
    const [follow, setFollow] = useState(false)
    const [followText, setFolloText] = useState("Follow ")
    const handleFollowButtin = () => {
        setFollow(!follow)
        setFolloText("Following ")


    }
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <ImageBackground source={require('../../assets/subcriptionbg.png')} className='h-full items-center ' >
            <View className=" flex-row   ml-1 space-x-24 m-4 px-6 items-center absolute left-0 ">
                <TouchableOpacity>
                    <ArrowLeftIcon color="#50165F" size={30} />
                </TouchableOpacity>

                <Image source={require('../../assets/followcircles.png')} />

            </View>
            <View className="justify-center items-center  mt-14 ">
                <Text className="text-white text-[25px] font-bold  ">FOLLOW YOUR FAVOURITE </Text>
                <Text className="text-white text-[25px]  font-bold">TEAMS</Text>
                <View className="w-[64px] h-[4px]  border bg-[#500E61]"></View>
            </View>
            <View className="h-[400px] w-[393px]  mt-3">
                <ScrollView className="  ">
                    <View className=" mt-6 items-center">
                        <View className=" ">

                            <View className="flex-row  items-center m-3">
                                <Image
                                    source={require('../../assets/burenga.png')}
                                    className=" w-[45px] h-[47px]"
                                />
                                <Text className="text-white text-[15px] flex-1">Beruga FC</Text>
                                <TouchableOpacity className={`w-[103px] h-[37px] ${follow ? "bg-[#500e61]" : "bg-[#e66975] "} border  rounded-[20px] items-center justify-center `}
                                    onPress={handleFollowButtin}>
                                    <Text className="text-white  text-[16px] font-semibold ">{follow ? "Following" : "Follow"}</Text>
                                </TouchableOpacity>

                            </View>
                            <View className="border-[0.5px]  w-[355px] border-[#e66975]"></View>
                        </View>
                        <View className=" ">

                            <View className="flex-row  items-center  m-3">
                                <Image
                                    source={require('../../assets/Olympiaco.png')}
                                    className=" w-[45px] h-[47px]"
                                />
                                <Text className="text-white text-[15px] flex-1">Olympiaco FC</Text>
                                <View className="w-[103px] h-[37px]  border  rounded-[20px] items-center justify-center bg-[#e66975] ">
                                    <Text className="text-white  text-[16px] font-semibold ">Follow</Text>
                                </View>

                            </View>
                            <View className="border-[0.5px]  w-[355px] border-[#e66975]"></View>
                        </View>
                        <View className=" ">

                            <View className="flex-row  items-center  m-3">
                                <Image
                                    source={require('../../assets/LEGENDS.png')}
                                    className=" w-[45px] h-[47px]"
                                />
                                <Text className="text-white text-[15px] flex-1">LEGENDS FC</Text>
                                <View className="w-[103px] h-[37px]  border  rounded-[20px] items-center justify-center bg-[#e66975] ">
                                    <Text className="text-white  text-[16px] font-semibold ">Follow</Text>
                                </View>

                            </View>
                            <View className="border-[0.5px]   w-[355px] border-[#e66975]"></View>

                        </View>
                        <View className=" ">

                            <View className="flex-row  items-center  m-3">
                                <Image
                                    source={require('../../assets/LEGENDS.png')}
                                    className=" w-[45px] h-[47px]"
                                />
                                <Text className="text-white text-[15px] flex-1">LEGENDS FC</Text>
                                <View className="w-[103px] h-[37px]  border  rounded-[20px] items-center justify-center bg-[#e66975] ">
                                    <Text className="text-white  text-[16px] font-semibold ">Follow</Text>
                                </View>

                            </View>
                            <View className="border-[0.5px]  w-[355px] border-[#e66975]"></View>

                        </View>
                        <View className=" ">

                            <View className="flex-row  items-center  m-3">
                                <Image
                                    source={require('../../assets/LEGENDS.png')}
                                    className=" w-[45px] h-[47px]"
                                />
                                <Text className="text-white text-[15px] flex-1">LEGENDS FC</Text>
                                <View className="w-[103px] h-[37px]  border  rounded-[20px] items-center justify-center bg-[#e66975] ">
                                    <Text className="text-white  text-[16px] font-semibold ">Follow</Text>
                                </View>

                            </View>
                            <View className="border-[0.5px]   w-[355px] border-[#e66975]"></View>

                        </View>
                        <View className=" ">

                            <View className="flex-row  items-center  m-3">
                                <Image
                                    source={require('../../assets/LEGENDS.png')}
                                    className=" w-[45px] h-[47px]"
                                />
                                <Text className="text-white text-[15px] flex-1">LEGENDS FC</Text>
                                <View className="w-[103px] h-[37px]  border  rounded-[20px] items-center justify-center bg-[#e66975] ">
                                    <Text className="text-white  text-[16px] font-semibold ">Follow</Text>
                                </View>

                            </View>
                            <View className="border-[0.5px]   w-[355px] border-[#e66975]"></View>

                        </View>
                        <View className=" ">

                            <View className="flex-row  items-center  m-3">
                                <Image
                                    source={require('../../assets/LEGENDS.png')}
                                    className=" w-[45px] h-[47px]"
                                />
                                <Text className="text-white text-[15px] flex-1">LEGENDS FC</Text>
                                <View className="w-[103px] h-[37px]  border  rounded-[20px] items-center justify-center bg-[#e66975] ">
                                    <Text className="text-white  text-[16px] font-semibold ">Follow</Text>
                                </View>

                            </View>
                            <View className="border-[0.5px]   w-[355px] border-[#e66975]"></View>

                        </View>
                    </View>



                </ScrollView>
            </View>

            <Text className="text-white  font-semibold  text-[15px]">Get game updates, news, event alerts  on your </Text>
            <Text className="text-white  font-semibold  text-[15px]"> favourite teams</Text>

            <TouchableOpacity onPress={navigation.navigate('SubscribeScreen')}
                className="w-[360px] h-[51px] items-center justify-center  bg-[#FF0000] rounded-[30px] mt-2 absolute bottom-[100px] ">
                <Text className="text-white font-bold text-[21px]">Next </Text>
            </TouchableOpacity>
            <ModalPopup visible={modalVisible} onClose={closeModal} />
            <Image
                source={require('../../assets/bottomlogo.png')}
                className="   bottom-0  absolute "
            />
        </ImageBackground >
    )
}

export default FollowScreen