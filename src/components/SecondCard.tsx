// @ts-nocheck
import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const SecondCard = ({image , caption}) => {
    return (
        <ImageBackground source={{
            uri: image
        }}
            className="  relative h-[250px] mt-3  w-[160px]  mx-2  border-[#FF0000]  rounded-[10px] border brounded-[10px]  items-center">

            <Text className="absolute bottom-0 text-white">{
                caption
            }</Text>
        </ImageBackground>
    )
}

export default SecondCard