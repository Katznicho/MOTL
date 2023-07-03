// @ts-nocheck
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MatchTable = ({ matchData }: any) => {
    return (
        <View style={styles.container}>
            <View className='flex-row items-center bg-[#bf4c91] ' >
                <View className=' flex-auto flex-row'>
                    <Text style={styles.fontstyletop}> TEAM</Text>
                    <Image source={require('../assets/livecon.png')} />
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
                <View style={styles.row}>

                    <Text style={[styles.header]}>PL</Text>
                    <Text style={[styles.header]}>W</Text>
                    <Text style={[styles.header]}>D</Text>
                    <Text style={[styles.cell, styles.header]}>L</Text>
                    <Text style={[styles.header]}>+/-</Text>
                    <Text style={[styles.header]}>GD</Text>
                    <Text style={[styles.header]}>PTS</Text>


                </View>
            </View>


            <View className='flex-row items-center '>
                <View className='flex-auto flex-row mt-2'>
                    <Text style={styles.teamNumber}>1</Text>
                    <Image
                        source={require('../assets/burenga.png')}
                        className="w-[25px] h-[25px]"
                    />
                    <Text style={styles.fontstyle}>BERUGA FC</Text>

                </View>
                <View>


                    <View style={styles.row} >

                        <Text style={styles.cell}>19</Text>
                        <Text style={styles.cell}>30</Text>
                        <Text style={styles.cell}>3</Text>
                        <Text style={styles.cell}>7</Text>
                        <Text style={styles.cell}>20-5</Text>
                        <Text style={styles.cell}>45</Text>
                        <Text style={[styles.cell, styles.teamNumber]}>30</Text>
                    </View>
                </View>

            </View>
            <View className="border-b-[0.5px] w-[406px] mt-2 border-[#FF0000]"></View>
            <View className='flex-row items-center  mt-2'>
                <View className='flex-auto flex-row'>
                    <Text style={styles.teamNumber}>2</Text>
                    <Image
                        source={require('../assets/burenga.png')}
                        className="w-[25px] h-[25px]"
                    />
                    <Text style={styles.fontstyle}>BERUGA FC</Text>

                </View>
                <View>


                    <View style={styles.row} >

                        <Text style={styles.cell}>19</Text>
                        <Text style={styles.cell}>30</Text>
                        <Text style={styles.cell}>3</Text>
                        <Text style={styles.cell}>7</Text>
                        <Text style={styles.cell}>20-5</Text>
                        <Text style={styles.cell}>45</Text>
                        <Text style={[styles.cell, styles.teamNumber]}>30</Text>
                    </View>

                </View>


            </View>
            <View className="border-b-[0.5px] w-[406px] mt-2 border-[#FF0000]"></View>


            <View className='flex-row items-center  mt-2'>
                <View className='flex-auto flex-row'>
                    <Text style={styles.teamNumber}>3</Text>
                    <Image
                        source={require('../assets/burenga.png')}
                        className="w-[25px] h-[25px]"
                    />
                    <Text style={styles.fontstyle}>BERUGA FC</Text>

                </View>
                <View>


                    <View style={styles.row} >

                        <Text style={styles.cell}>19</Text>
                        <Text style={styles.cell}>30</Text>
                        <Text style={styles.cell}>3</Text>
                        <Text style={styles.cell}>7</Text>
                        <Text style={styles.cell}>20-5</Text>
                        <Text style={styles.cell}>45</Text>
                        <Text style={[styles.cell, styles.teamNumber]}>30</Text>
                    </View>

                </View>


            </View>
            <View className="border-b-[0.5px] w-[406px] mt-2 border-[#FF0000]"></View>
            <View className='flex-row items-center  mt-2'>
                <View className='flex-auto flex-row'>
                    <Text style={styles.teamNumber}>4</Text>
                    <Image
                        source={require('../assets/burenga.png')}
                        className="w-[25px] h-[25px]"
                    />
                    <Text style={styles.fontstyle}>BERUGA FC</Text>

                </View>
                <View>


                    <View style={styles.row} >

                        <Text style={styles.cell}>19</Text>
                        <Text style={styles.cell}>30</Text>
                        <Text style={styles.cell}>3</Text>
                        <Text style={styles.cell}>7</Text>
                        <Text style={styles.cell}>20-5</Text>
                        <Text style={styles.cell}>45</Text>
                        <Text style={[styles.cell, styles.teamNumber]}>30</Text>
                    </View>

                </View>


            </View>
            <View className="border-b-[0.5px] w-[406px] mt-2 border-[#FF0000]"></View>

            <TouchableOpacity >
                <Text style={{
                    fontSize: 30,
                    fontWeight: '500',
                    fontFamily: 'Poppins-ExtraBold',
                    color: '#FF0000'
                }}>See all</Text></TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,

        backgroundColor: '#6194',
        paddingHorizontal: 5,
        width: 370,
        borderRadius: 10,

        justifyContent: 'center',
        marginRight: 10,
        alignItems: 'center',
        borderBottomEndRadius: 10






    },

    row: {
        flexDirection: 'row',
        alignItems: "center"



    },
    fontstyle: {
        fontWeight: '700',
        fontSize: 13,
        fontFamily: 'Poppins-Bold',
        color: 'white',
    },
    fontstyletop: {
        fontSize: 15,
        fontFamily: 'LeagueGothic-Regular',
        color: '#50165F',
    },
    teamNumber: {
        fontSize: 19,
        fontWeight: '700',
        fontFamily: 'Poppins-ExtraBold',
        color: 'white',
    },


    cell: {


        paddingHorizontal: 10,
        color: 'white',
        fontFamily: 'Poppins-Light',
        fontSize: 15,
        alignItems: 'center',
        flexDirection: 'row'




    },
    header: {
        backgroundColor: '#bf4c91',

        fontWeight: 'bold',
        paddingHorizontal: 11,
        fontSize: 15,
        fontFamily: 'LeagueGothic-Regular',
        color: '#50165F',

    },
});

export default MatchTable;
