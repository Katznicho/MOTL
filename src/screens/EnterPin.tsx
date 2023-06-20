// @ts-nocheck
import {
    View,
    TouchableOpacity, Text, TextInput
} from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon, CurrencyRupeeIcon } from 'react-native-heroicons/solid'

import PincodeInput from "react-native-pincode-input";
import CurrencyModle from '../components/CurrencyModle';
import { useNavigation, useNavigationBuilder } from '@react-navigation/native';
export default function EnterPin() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View className="items-center justify-center  relative  ">
            <TouchableOpacity className="absolute left-5 top-5  ">
                <ArrowLeftIcon className="" color='black' size={30} /></TouchableOpacity>

            <View className='justify-center items-center top-[184px]' >
                <Text className='text-black font-bold text-[30px]'>Enter your code</Text>
                <Text>256075321236 <Text className='text-black font-bold text-[20px] '>Resend</Text></Text>
                <View className='flex-row space-x-5 mt-7'>
                    <View className='border-b-[3px] w-[67px]'>
                        <TextInput maxLength={1}
                            className=' text-black text-[20px]'
                            keyboardType='number-pad' />
                    </View>
                    <View className='border-b-[3px] w-[67px]'>
                        <TextInput maxLength={1}
                            keyboardType='number-pad'
                            className=' text-black text-[20px]' />
                    </View>
                    <View className='border-b-[3px] w-[67px]'>
                        <TextInput maxLength={1}
                            keyboardType='number-pad'
                            className=' text-black text-[20px]' />
                    </View>
                    <View className='border-b-[3px] w-[67px]'>
                        <TextInput maxLength={1}
                            keyboardType='number-pad'
                            className=' text-black text-[20px]' />
                    </View>
                </View>
                <TouchableOpacity onPress={openModal}
                    className='bg-[#FF0000] w-[342px] h-[58px] mt-14 rounded-[30px] items-center justify-center'>
                    <Text className='text-white text-[20px] font-bold'>Verify</Text>
                </TouchableOpacity>
                <CurrencyModle visible={modalVisible} onClose={closeModal} />
            </View>

        </View>
    )
}