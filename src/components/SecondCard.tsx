// @ts-nocheck
import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

const SecondCard = ({ image, caption }) => {
    return (
        <View className='relative border-[#FF0000]  h-[250px]  mx-1 w-[168px] border-[2px]  rounded-[10px]   bg-gray-400 items-center justify-center mt-3'>
            <Image source={{
                uri: image
            }}
                className="  h-[242px]  w-[158px]    rounded-[10px]   items-center">


            </Image>
            <Text style={{
                position: 'absolute',
                color: 'white',
                fontFamily: 'Poppins-Light',
                fontSize: 13,
                bottom: 0

            }}>{
                    caption
                }</Text>
        </View>

    )
}

export default SecondCard