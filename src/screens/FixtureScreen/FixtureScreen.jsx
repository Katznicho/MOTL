import React from 'react';
import {
  BellIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeOpenIcon,
} from 'react-native-heroicons/outline';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';

const FixtureScreen = () => {
  return (
    <View>
      <SafeAreaView className="bg-[#8C27A] flex-1">
        <ImageBackground
          source={require('./assests/bg3.png')}
          className="flex-1">
          <View className="bg-[#FF8F8F] w-full h-[143px]">
            <View className=" bg-[#C2628E] w-82 mr-3  mt-14  flex-row  ml-3  h-[40px] items-center   space-x-[90px] px-5 rounded-[5px] justify-center">
              <Image source={require('./assests/bag1.png')} className="" />

              <TextInput
                placeholder="SORT BY TEAM"
                placeholderTextColor="white"
                className="text-white  w-30 "
                maxLength={13}
              />
              <Image source={require('./assests/icon.png')} className="" />
            </View>
          </View>
          <View>
            <View className="h-full w-full bg-[#c18286] mt-5 ">
              <ScrollView>
                <View className="bg-[#B66194]   w-82 ml-3 m-3 mr-3 rounded-[10px]">
                  <View className=" flex-row items-center justify-center px-7  py-3">
                    <Text className="text-[#50165F] text-[18px] font-extrabold flex-1">
                      Today 25th June 2023
                    </Text>
                    <EllipsisHorizontalCircleIcon
                      size={35}
                      color="#50165F"
                      className=""
                    />
                  </View>

                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] ">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image
                        source={require('./assests/bell.png')}
                        className="border"
                      />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        BERUGA FC
                      </Text>
                      <Image
                        source={require('./assests/burenga.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/Olympiaco.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        Olympiaco Fc
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>

                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        LEGENDS FC
                      </Text>
                      <Image
                        source={require('./assests/LEGENDS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/CARDINAL.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        THE CARDINAL...
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        EXTREME FC
                      </Text>
                      <Image
                        source={require('./assests/EXTREME.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/ROVERS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        ROVERS FC
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        BERUGA FC
                      </Text>
                      <Image
                        source={require('./assests/burenga.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/LEGENDS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        LEGENDS FC
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                </View>

                <View className="bg-[#B66194]   w-82 ml-3 m-3 mr-3 rounded-[10px]">
                  <View className=" flex-row items-center justify-center px-7  py-3">
                    <Text className="text-[#50165F] text-[18px] font-extrabold flex-1">
                      Tomorrow 25th June 2023
                    </Text>
                    <EllipsisHorizontalCircleIcon
                      size={35}
                      color="#50165F"
                      className=""
                    />
                  </View>

                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] ">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image
                        source={require('./assests/bell.png')}
                        className="border  "
                      />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        BERUGA FC
                      </Text>
                      <Image
                        source={require('./assests/burenga.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/Olympiaco.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        Olympiaco Fc
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>

                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        LEGENDS FC
                      </Text>
                      <Image
                        source={require('./assests/LEGENDS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/CARDINAL.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        THE CARDINAL...
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        EXTREME FC
                      </Text>
                      <Image
                        source={require('./assests/EXTREME.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/ROVERS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        ROVERS FC
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        BERUGA FC
                      </Text>
                      <Image
                        source={require('./assests/burenga.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/LEGENDS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        LEGENDS FC
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                </View>
                <View className="bg-[#B66194]   w-82 ml-3 m-3 mr-3 rounded-[10px]">
                  <View className=" flex-row items-center justify-center px-7  py-3">
                    <Text className="text-[#50165F] text-[18px] font-extrabold flex-1">
                      Saturday 25th June 2023
                    </Text>
                    <EllipsisHorizontalCircleIcon
                      size={35}
                      color="#50165F"
                      className=""
                    />
                  </View>

                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] ">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image
                        source={require('./assests/bell.png')}
                        className="border  "
                      />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        BERUGA FC
                      </Text>
                      <Image
                        source={require('./assests/burenga.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/Olympiaco.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        Olympiaco Fc
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>

                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        LEGENDS FC
                      </Text>
                      <Image
                        source={require('./assests/LEGENDS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/CARDINAL.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        THE CARDINAL...
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        EXTREME FC
                      </Text>
                      <Image
                        source={require('./assests/EXTREME.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/ROVERS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        ROVERS FC
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                  <View className="">
                    <View className="border-[0.5px] border-[#FF0000]"></View>
                    <View className="flex-row space-x-6 justify-center items-center  ">
                      <ImageBackground
                        source={require('./assests/bg1.png')}
                        className="w-[250] h-[30px]  border-[0.5] justify-center items-center">
                        <Text className="text-white  text-[15px] py-1">
                          Game week 7
                        </Text>
                      </ImageBackground>
                      <Image source={require('./assests/bell.png')} />
                    </View>
                  </View>

                  <View className=" items-center justify-center p-3">
                    <View className="flex-row  space-x-1">
                      <Text className="text-white font-semibold text-[12px]">
                        BERUGA FC
                      </Text>
                      <Image
                        source={require('./assests/burenga.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <View className="bg-[#50165F] w-[76px] h-[30px] rounded-[5px] flex-row items-center justify-center space-x-2">
                        <Text className="text-white  font-bold text-[24px]">
                          3
                        </Text>
                        <View className="border-r-2 h-[30px] border-[#FF0000]" />
                        <Text className="text-white  font-bold text-[24px]">
                          1
                        </Text>
                      </View>
                      <Image
                        source={require('./assests/LEGENDS.png')}
                        className=" w-[45px] h-[47px]"
                      />
                      <Text className="text-white  text-[12px] font-semibold">
                        LEGENDS FC
                      </Text>
                    </View>
                    <Text className="text-white text-[20px]  font-bold ">
                      FT
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>

          <BottomBar />
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default FixtureScreen;
