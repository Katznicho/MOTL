import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/solid';
import SelectDropdown from 'react-native-select-dropdown';
const data = ['BERUGA FC.', '', 'BERUGA FC.', 'BERUGA FC.'];

const SubcriptionScreen = () => {
  const [subcribeFee, SetSubcriptionFee] = useState(25000);
  return (
    <View className=" bg-[#fe7878] h-full w-full">
      <View className=" flex-row items-center justify-between m-4">
        <TouchableOpacity>
          <ArrowLeftIcon className=" " color="#50165F" />
        </TouchableOpacity>

        <Image source={require('./assests/circles.png')} />
        <TouchableOpacity>
          <Text className=" text-white">SKIP</Text>
        </TouchableOpacity>
      </View>
      <View className="items-center text-[18px]">
        <Text className="text-white text-[20px] font-bold">MEMBERSHIP</Text>
        <Text className="text-white text-[20px] font-bold">
          SUBSCRIPTION FOR YOUR
        </Text>
        <Text className=" text-white  text-[20px] font-bold">
          FAVOURITE TEAM
        </Text>
        <View className="border border-[#50165F] items-center w-14 "></View>
      </View>

      <Image source={require('./assests/banner.png')} className=" h-60" />

      <ImageBackground
        source={require('./assests/bg-2.png')}
        className="w-full h-full items-center relative">
        <View
          className={`bg-[#D9D9D9] 
            
           rounded-[15px] h-[35px] w-[375px]   pt-1 flex-row  px-2 space-x-2`}>
          <TouchableOpacity
            onPress={() => SetSubcriptionFee(25000)}
            className={`${
              subcribeFee === 25000 ? 'bg-[FFFFFF]' : ''
            }  w-[116px] h-[28px]  rounded-[15px] border items-center justify-center `}>
            <Text className="font-bold text-black text-[15px]">SLIVER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSubcriptionFee(50000)}
            className={`${
              subcribeFee === 50000 ? 'bg-[#D3C00C]' : ''
            }  w-[116px] h-[28px]  rounded-[15px] border items-center justify-center `}>
            <Text className="font-bold text-black text-[15px]">GOLD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSubcriptionFee(100000)}
            className={`bg-[FFFFFF] ${
              subcribeFee === 100000 ? 'bg-[#705C5C]' : ''
            } w-[116px] h-[28px] text-[15px]  rounded-[15px]  items-center justify-center `}>
            <Text className="font-bold text-black">PLATINUM</Text>
          </TouchableOpacity>
        </View>

        <View
          className={` ${
            subcribeFee === 25000 ? 'bg-[#D9D9D9]' : ' bg-[#D3C00C]'
          } ${
            subcribeFee === 100000 ? 'bg-[#705C5C]' : ''
          } h-[187px] w-[375px] rounded-[15px] mt-3 `}>
          <Text className="font-bold text-black text-[17px] justify-center items-center mb-2 pt-2  ml-[130px] ">
            {subcribeFee}/=
          </Text>
          <View className="border-[0.5px]"></View>
          <View className="ml-3">
            <View className="flex items-center flex-row  ">
              <CheckCircleIcon color="black" />
              <Text className="text-black text-base font-semiblod text-[13px]">
                Verified profile Silver budge
              </Text>
            </View>
            <View className="flex items-center flex-row ">
              <CheckCircleIcon color="black" />
              <Text className="text-black text-base font-semiblod text-[13px]">
                Team events invites
              </Text>
            </View>
            <View className="flex items-center flex-row ">
              <CheckCircleIcon color="black" />
              <Text className="text-black text-base font-semiblod text-[13px]">
                Team administrative notices
              </Text>
            </View>
            <View className="flex items-center flex-row ">
              <CheckCircleIcon color="black" />
              <Text className="text-black text-base font-semiblod text-[13px]">
                Silver budge related emojis and interactions
              </Text>
            </View>
            <ModalDropdown
              options={data}
              className=" border p-2 w-80   ml-[4px]  justify-center flex items-center  "
              renderRow={option => (
                <Text className="w-10 text-black ml-10 items-start justify-center">
                  {option}
                </Text>
              )}></ModalDropdown>
          </View>
        </View>
        <TouchableOpacity className="w-[360px] h-[51px] items-center justify-center  bg-[#FF0000] rounded-[30px] mt-3 ">
          <Text className="text-white font-bold text-[15px]">Subcribe</Text>
        </TouchableOpacity>
        <Image
          source={require('./assests/bottomlogo.png')}
          className=" bottom-[-40]  fixed "
        />
      </ImageBackground>
    </View>
  );
};

export default SubcriptionScreen;
