import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const StatScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/statbg.png')}
      className="h-full w-full items-center">
      <ScrollView className="mb-4">
        <View className="bg-[#b66194] w-[370px]  rounded-md h-[330px] mt-5 items-center">
          <View className="bg-[#bf4c91] w-[370px] h-[35px] rounded-md space-x-2 border-b  border-[#FF0000] items-center flex-row px-2">
            <Text style={styles.fontstyletop}> TEAM</Text>

            <View className="flex-row items-center mr-6">
              <Image source={require('../../assets/livecon.png')} />
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  color: 'white',
                  fontSize: 14,
                }}>
                {' '}
                Live
              </Text>
            </View>
            <View className="flex-row items-center space-x-[19px] ">
              <Text style={styles.fontstyletop}>PL</Text>
              <Text style={styles.fontstyletop}>W</Text>
              <Text style={styles.fontstyletop}>D</Text>
              <Text style={styles.fontstyletop}>L</Text>
              <Text style={styles.fontstyletop}>+/-</Text>
              <Text style={styles.fontstyletop}>GD</Text>
              <Text style={styles.fontstyletop}>PTS</Text>
            </View>
          </View>
          <View className="  items-center flex-row px-2    mt-2">
            <View className="flex-row items-center space-x-1 mr-2">
              <Text style={styles.fontstyleptstotal}>1</Text>
              <Image
                source={require('../../assets/burenga.png')}
                className="w-[25px] h-[25px]"
              />
              <Text style={styles.fontstyle}>BERUGA FC</Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 20-10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstyleptstotal}> 30</Text>
            </View>
          </View>
          <View className="border-b-[0.5px] w-[406px] mt-3 border-[#FF0000]"></View>
          <View className="  items-center flex-row px-2    mt-2">
            <View className="flex-row items-center space-x-1 mr-2">
              <Text style={styles.fontstyleptstotal}>2</Text>
              <Image
                source={require('../../assets/burenga.png')}
                className="w-[25px] h-[25px]"
              />
              <Text style={styles.fontstyle}>BERUGA FC</Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 20-10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstyleptstotal}> 30</Text>
            </View>
          </View>

          <View className="border-b-[0.5px] w-[406px] mt-3 border-[#FF0000]"></View>
          <View className="  items-center flex-row px-2    mt-2">
            <View className="flex-row items-center space-x-1 mr-2">
              <Text style={styles.fontstyleptstotal}>3</Text>
              <Image
                source={require('../../assets/burenga.png')}
                className="w-[25px] h-[25px]"
              />
              <Text style={styles.fontstyle}>BERUGA FC</Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 20-10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstyleptstotal}> 30</Text>
            </View>
          </View>
          <View className="border-b-[0.5px] w-[406px] mt-3 border-[#FF0000]"></View>
          <View className="  items-center flex-row px-2    mt-2">
            <View className="flex-row items-center space-x-1 mr-2">
              <Text style={styles.fontstyleptstotal}>4</Text>
              <Image
                source={require('../../assets/burenga.png')}
                className="w-[25px] h-[25px]"
              />
              <Text style={styles.fontstyle}>BERUGA FC</Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 20-10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstyleptstotal}> 30</Text>
            </View>
          </View>
          <View className="  items-center flex-row px-2    mt-2">
            <View className="flex-row items-center space-x-1 mr-2">
              <Text style={styles.fontstyleptstotal}>5</Text>
              <Image
                source={require('../../assets/burenga.png')}
                className="w-[25px] h-[25px]"
              />
              <Text style={styles.fontstyle}>BERUGA FC</Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstylepts}> 20-10</Text>
              <Text style={styles.fontstylepts}> 10</Text>
              <Text style={styles.fontstyleptstotal}> 30</Text>
            </View>
          </View>

          <View className="border-b-[0.5px] w-[406px] mt-3 border-[#FF0000]"></View>

          <Text style={styles.sellallstyles}>See all</Text>
        </View>
        <View className="bg-[#B23982] w-[370px]  rounded-md h-[330px] mt-5 items-center relative">
          <Text className="text-white absolute left-5 top-3 font-bold text-[15px]">
            TOP PLAYERS
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="space-x-3">
            <View className="w-[287px] h-[291px] bg-[#bf4c91] mt-14 rounded-md items-center  ">
              <Text className="text-[#50165F] font-extrabold mt-3 text-[17px] ">
                TOP SCORERS
              </Text>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>

              <View className="flex-row items-center  px-3">
                <Text className="text-white text-[21px] font-bold">1</Text>
                <View className="relative">
                  <Image source={require('../../assets/player.png')} />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-11  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px]">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold ">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold mr-2">2</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold ">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold mr-2">3</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold S">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold">2</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold S">12</Text>
              </View>
            </View>
            <View className="w-[287px] h-[291px] bg-[#bf4c91] mt-14 rounded-md items-center  ">
              <Text className="text-[#50165F] font-extrabold mt-3 text-[17px] ">
                TOP SCORERS
              </Text>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>

              <View className="flex-row items-center  px-3">
                <Text className="text-white text-[21px] font-bold">1</Text>
                <View className="relative">
                  <Image source={require('../../assets/player.png')} />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-11  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px]">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold ">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold mr-2">2</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold ">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold mr-2">3</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold S">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold">2</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold S">12</Text>
              </View>
            </View>
            <View className="w-[287px] h-[291px] bg-[#bf4c91] mt-14 rounded-md items-center  ">
              <Text className="text-[#50165F] font-extrabold mt-3 text-[17px] ">
                TOP SCORERS
              </Text>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>

              <View className="flex-row items-center  px-3">
                <Text className="text-white text-[21px] font-bold">1</Text>
                <View className="relative">
                  <Image source={require('../../assets/player.png')} />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-11  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px]">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold ">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold mr-2">2</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold ">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold mr-2">3</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold S">12</Text>
              </View>
              <View className="w-[287px] border-b-[0.5px] mt-2 border-[#FF0000]"></View>
              <View className="flex-row items-center bg-[#b66194] w-[287px] px-3">
                <Text className="text-white text-[21px] font-bold">2</Text>
                <View className="relative">
                  <Image
                    source={require('../../assets/player.png')}
                    className="w-[37px] h-[46px]"
                  />

                  <Image
                    source={require('../../assets/burenga.png')}
                    className="w-[25px] h-[25px] absolute bottom-0 left-7  "
                  />
                </View>
                <View className="items-center flex-1">
                  <Text className="text-white text-bold mt-3">
                    Jacob Wazabonlo
                  </Text>
                  <Text className="text-white text-[13px] ">Beruga FC</Text>
                </View>
                <Text className="text-white text-[27px] font-bold S">12</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default StatScreen;

const styles = StyleSheet.create({
  fontstyletop: {
    fontSize: 23,
    fontFamily: 'LeagueGothic-Regular',
    color: '#50165F',
  },
  fontstyle: {
    fontWeight: '700',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  fontstylepts: {
    fontSize: 17,
    fontFamily: 'Poppins-Light',
    color: 'white',
  },
  fontstyleptstotal: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Poppins-ExtraBold',
    color: 'white',
  },
  sellallstyles: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Poppins-ExtraBold',
    color: '#FF0000',
  },
});
