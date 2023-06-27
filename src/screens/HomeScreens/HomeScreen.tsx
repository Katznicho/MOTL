// @ts-nocheck

import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { generalstyles } from '../../generalstyles/generalstyles'
import Posts from './StatScreen'
import Cards from '../../components/Cards'
import BuzzScreen from '../Buzz'
import SubcriptionScreen from '../SubcriptionScreen/Subcription'
import { ScrollView } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={[generalstyles.container]}>

      <ImageBackground source={require("../../assets/background.png")} className=" h-full  ">
        <ScrollView className=''>
          <Cards />
        </ScrollView>
      </ImageBackground>


    </SafeAreaView>




  )
}



export default HomeScreen

const styles = StyleSheet.create({})