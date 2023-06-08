import React from 'react';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { theme } from '../../theme/theme';
import { Avatar, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Enypto from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack/HomeStack';
import FrameScreen from './FrameScreen';
import Fixtures from './CalendarStack/Fixtures';
import CalendarStack from './CalendarStack/CalendarStack';
import Posts from './Post';


//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const BaseStack = () => {

  const paper_theme = useTheme();
  paper_theme.colors.secondaryContainer = theme.colors.primary;
  paper_theme.colors.error = theme.colors.buttonColor;

  const { appIntro, isLoggedIn, user } = useSelector((state: RootState) => state.user);

  return (<Tab.Navigator
    initialRouteName="Home"
    backBehavior="order"
    sceneContainerStyle={{
      backgroundColor: theme.colors.screenBackground,
      flex: 1,
    }}
    screenOptions={
      {
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderWidth: 0,
          borderTopWidth: 0,
          borderColor: theme.colors.primary,
          height: 60,
        },
        headerShown: false,
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '400',
          fontFamily: "Montserrat-VariableFont_wght",
          fontStyle: 'normal',
          lineHeight: 20,
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },




      }
    }
  >

    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarAccessibilityLabel: 'Home',

        tabBarIcon: ({ color }: any) => (
          <View>
            <Enypto
              name="home"
              color={color}
              size={25}
            />
          </View>

        ),
      }}


    />

    <Tab.Screen
      name="Fixtures"
      component={CalendarStack}
      options={{
        tabBarLabel: 'Fixtures',
        tabBarAccessibilityLabel: 'Fixtures',
        tabBarIcon: ({ color }: any) => (
          <FontAwesome5
            name="calendar"
            color={color}
            size={22}
          />
        ),

      }}
    />

    <Tab.Screen
      name="MOTL"
      component={FrameScreen}
      options={{
        tabBarLabel: 'MOTL',
        tabBarAccessibilityLabel: 'MOTL',
        tabBarIcon: ({ color }: any) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.primary,
              borderRadius: 50,
              width: 80,
              //move the tab bar to the top
              position: 'absolute',
              top: -20,
              //...styles.shadowStyles,

            }}
          >
            <Avatar.Image
              size={35}
              source={require("../../assets/logos/logo_white.png")}
              style={{
                backgroundColor: theme.colors.primary,
                borderRadius: 50,
                marginVertical: 10,
                height: 80,
              }}

            />

          </View>

        ),

      }}
    />




    <Tab.Screen
      name="Shop"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Shop',
        tabBarAccessibilityLabel: 'Shop',
        tabBarIcon: ({ color }: any) => (
          <MaterialCommunityIcons
            name="shopping"
            color={color}
            size={25}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Stats"
      component={Posts}
      options={{
        tabBarLabel: 'Stats',
        tabBarAccessibilityLabel: 'Stats',
        tabBarIcon: ({ color }: any) => (
          <FontAwesome5
            name="signal"
            color={color}
            size={18}
          />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadowStyles: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default BaseStack;
