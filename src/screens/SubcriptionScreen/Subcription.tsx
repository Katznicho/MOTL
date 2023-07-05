// @ts-nocheck
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/solid';
import SelectDropdown from 'react-native-select-dropdown';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setAppIntro } from '../../redux/slices/UserSlice';
const data = ['BERUGA FC.', '', 'BERUGA FC.', 'BERUGA FC.'];

const SubcriptionScreen = ({ navigation }) => {
  const [subcribeFee, SetSubcriptionFee] = useState(25000);
  const { } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onFinish = () => {
    dispatch(setAppIntro())
  }
  return (
    <View className=" bg-[#fe7878] h-full w-full">
      <View className=" flex-row items-center justify-between m-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon className=" " color="#50165F" />
        </TouchableOpacity>

        <Image source={require('../../assets/circles.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
          <Text className=" text-white">SKIP</Text>
        </TouchableOpacity>
      </View>
      <View className="items-center text-[18px]">
        <Text style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 25,
          color: 'white',
          fontWeight: 700

        }}>MEMBERSHIP</Text>
        <Text style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 25,
          color: 'white',
          fontWeight: 700

        }}>
          SUBSCRIPTION FOR YOUR
        </Text>
        <Text style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 25,
          color: 'white',
          fontWeight: 500

        }}>
          FAVOURITE TEAM
        </Text>
        <View className="border border-[#50165F] items-center w-14 "></View>
      </View>

      <ImageBackground source={require('../../assets/banner.png')} className=" h-60 justify-center items-center" >

      </ImageBackground>

      <ImageBackground
        source={require('../../assets/bg-2.png')}
        className="w-full h-full items-center relative">
        <View
          className={`bg-[#D9D9D9] 
              
                        rounded-[15px] h-[35px] w-72  pt-1 flex-row  px-2 `}>
          <TouchableOpacity
            onPress={() => SetSubcriptionFee(25000)}
            className={`${subcribeFee === 25000 ? 'bg-[FFFFFF]' : ''
              }  w-20 h-[28px]  rounded-[15px]  items-center justify-center `}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 15,
                color: 'black',
                fontWeight: 600

              }}>SLIVER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSubcriptionFee(50000)}
            className={`${subcribeFee === 50000 ? 'bg-[#D3C00C]' : ''
              }  w-[116px] h-[28px]  rounded-[15px]  items-center justify-center `}>
            <Text style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 15,
              color: 'black',
              fontWeight: 600

            }}>GOLD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSubcriptionFee(100000)}
            className={`bg-[FFFFFF] ${subcribeFee === 100000 ? 'bg-[#705C5C]' : ''
              } w-20 h-[28px] text-[15px]  rounded-[15px]  items-center justify-center `}>
            <Text style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 15,
              color: 'black',
              fontWeight: 600

            }}>PLATINUM</Text>
          </TouchableOpacity>
        </View>

        <View
          className={` ${subcribeFee === 25000 ? 'bg-[#D9D9D9]' : ' bg-[#D3C00C]'
            } ${subcribeFee === 100000 ? 'bg-[#705C5C]' : ''
            } h-48 w-72 rounded-[15px] mt-1  items-center `}>
          <Text className="  mb-1 pt-1  justify-center mr-0 "
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 17,
              color: 'black',
              fontWeight: 600

            }}>
            UGX{subcribeFee.toLocaleString()}/=
          </Text>
          <View className="border-[0.5px]"></View>
          <View className="ml-3">
            <View className="flex items-center flex-row  ">
              <CheckCircleIcon color="black" size={15} />
              <Text className="text-black  text-[10px]"
                style={{
                  fontFamily: 'Poppins-Regular'
                }}>
                Verified profile Silver budge
              </Text>
            </View>
            <View className="flex items-center flex-row">
              <CheckCircleIcon color="black" size={15} />
              <Text className="text-black  "
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: 'black'

                }}>
                Team events invites
              </Text>
            </View>
            <View className="flex items-center flex-row ">
              <CheckCircleIcon color="black" size={15} />
              <Text style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 10,
                color: 'black'

              }}>
                Team administrative notices
              </Text>
            </View>
            <View className="flex items-center flex-row ">
              <CheckCircleIcon color="black" size={15} />
              <Text style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 10,
                color: 'black'

              }}>
                Silver budge related emojis and interactions
              </Text>
            </View>
            <View className="w-60 h-[30px] bg-[#f5f5f5] flex-row items-center justify-center px-3  mr-2   mt-4 rounded-[5px]">
              <Image source={require('../../assets/EXTREME.png')} className="w-[27px] h-[29px] ml-14" />
              <Text className="text-black  font-bold flex-1  "
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 13,
                  color: 'black'

                }}> BERUGA FC.</Text>
              <TouchableOpacity>

                <Image source={require('../../assets/drownarrow.png')} />
              </TouchableOpacity>


            </View>

          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PhoneVerification')}
          className="w-56 h-[41px] items-center justify-center  bg-[#FF0000] rounded-[30px] mt-2 mb-6 ">
          <Text className="text-white font-bold text-[15px]"
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
              color: 'white'

            }}>Subcribe</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View >
  );
};

export default SubcriptionScreen;
