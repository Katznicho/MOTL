// @ts-nocheck

import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ArrowDownLeftIcon, ArrowLeftIcon } from 'react-native-heroicons/solid'
import Visa from '../components/PaymentModels/Visa';
import { paymentcards } from '../constants/selectpaymentcard';

const PaymentScreen = () => {


    const [selectPaymentCard, setSelectPaymentCard] = useState(paymentcards[0].uri)
    const [selectedButton, setSelectedButton] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [tiecked, setTicked] = useState(false)
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleButtonPress = (id) => {
        const selected = paymentcards.find((image) => image.id === id);
        setSelectPaymentCard(selected ? selected.uri : null);
        setSelectedButton(id);


    };

    return (
        <ImageBackground source={require("../assets/paymentbg.png")} className="h-full w-full items-center  relative">


            <TouchableOpacity className="absolute left-5 top-5"><ArrowLeftIcon color="white" size={30} className="absolute left-0" /></TouchableOpacity>
            <Text className="text-white items-center  text-[25px] font-bold  mt-12">Select Payment method</Text>
            <View className="h-[550px] w-full bg-white absolute bottom-0 rounded-t-[35px] items-center">
                {selectPaymentCard && (<Image source={selectPaymentCard} className="w-[334px] h-[195px] rounded-[30px]  absolute top-[-100px]" />
                )}

                <View className="mt-32 items-center space-y-4">
                    <TouchableOpacity onPress={() => handleButtonPress(1)} className="w-[360px]  h-[65px] border rounded-[20px]  border-[#510E62] items-center flex-row  px-3">
                        <Image source={require('../assets/mastericon.png')} />
                        <Text className="text-black  font-semibold  text-[18px] ml-3 flex-1">MASTER CARD</Text>

                        {selectedButton === 1 ? <View className="w-[32px] h-[32px]  rounded-full bg-[#510E62] items-center justify-center">
                            <Image source={require('../assets/Done.png')} className="w-[25px] h-[21px] " />
                        </View> : ""}


                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handleButtonPress(2)} className="w-[360px]  h-[65px] border-2 rounded-[20px]  border-[#510E62] items-center flex-row px-3 ">
                        <Image source={require('../assets/visaicon.png')} />
                        <Text className="text-black  font-semibold  text-[18px] ml-3 flex-1">VISA CARD</Text>


                        {selectedButton === 2 ? <View className="w-[32px] h-[32px]  rounded-full bg-[#510E62] items-center justify-center">
                            <Image source={require('../assets/Done.png')} className="w-[25px] h-[21px] " />
                        </View> : ""}


                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleButtonPress(3)} className="w-[360px]  h-[65px] border rounded-[20px]  border-[#510E62] items-center flex-row px-3 ">

                        <Image source={require('../assets/mtnicon.png')} />
                        <View className="border-[1px] h-[56px] ml-1 mr-1"></View>

                        <Image source={require("../assets/airtelicon.png")} />
                        <Text className="text-black  font-semibold  text-[18px] ml-3 flex-1">MOBILE MONEY</Text>

                        {selectedButton === 3 ? <View className="w-[32px] h-[32px]  rounded-full bg-[#510E62] items-center justify-center">
                            <Image source={require('../assets/Done.png')} className="w-[25px] h-[21px] " />
                        </View> : ""}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleButtonPress(4)} className="w-[360px]  h-[65px] border rounded-[20px]  border-[#510E62] items-center flex-row  px-3">
                        <Image source={require('../assets/equityicon.png')} />
                        <View className=""><Text className="text-black  font-semibold  text-[18px] ml-3 ">EQUI SPORTS WALLET</Text>
                            <Text className="ml-3 text-[12px]">Default Method</Text>
                        </View>

                        {selectedButton === 4 ? <View className="w-[32px] h-[32px]  rounded-full bg-[#510E62] items-center justify-center ml-10">
                            <Image source={require('../assets/Done.png')} className="w-[25px] h-[21px] " />
                        </View> : ""}

                    </TouchableOpacity>
                    <TouchableOpacity onPress={openModal} className="w-[360px] h-[77px] bg-[#FF0000] rounded-[40px] justify-center items-center">
                        <Text className="text-[21px] text-white">Next</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Visa visible={modalVisible} onClose={closeModal} />

        </ImageBackground>
    )

}

export default PaymentScreen