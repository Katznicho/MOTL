// @ts-nocheck

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'


const PhoneVerification = () => {
    return (
        <View className=" items-center flex-1 relative" >

            <View className="m-5 absolute top-0 left-0"><ArrowLeftIcon className="m-5 mt-9" color="black" size={30} /></View>

            <View >
                <View className="mt-[100px] items-center">
                    <Image source={require('../../assets/phone.png')} />
                    <Text className="text-black text-[30px] font-extrabold items-center">Enter your phone number</Text>

                    <View className="border-2 bg-[#D9D9D9] px-5 w-[365px] h-[83px] rounded-[8px] items-center mt-5 flex-row border-[#7d7d7d]">
                        <Image source={require('../../assets/ug.png')} />
                        <Image source={require('../../assets/arrow.png')} className="ml-3" />
                        <TextInput placeholder='+256 | 786786400'
                            placeholderTextColor='black'
                            className="flex-1 ml-3"
                            keyboardType='number-pad' maxLength={13} />
                        <Image source={require('../../assets/plus.png')} />

                    </View>

                    <TouchableOpacity className="bg-[#FF0000] w-[342px] h-[58px] rounded-[30px] items-center  justify-center mt-14 " >
                        <Text className="text-white font-bold text-[20px]">Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default PhoneVerification
