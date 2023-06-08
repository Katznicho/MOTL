import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import TopBar from '../../../components/AppBars/TopBar';
import { theme } from '../../../theme/theme';
import HomeScreen from '../HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"MOTL"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                fontSize: 28,
                width: 44,
                textShadowColor: "rgba(0, 0, 0, 0.5)",
                textShadowOffset: {
                  width: 0,
                  height: 4,
                },
                textShadowRadius: 4,
                textAlign: "left",
                fontFamily: "LeagueGothic-Regular",

              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.textColor}`,
                marginBottom: 5,
              }}
            />
          ),
        }}

      />
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})