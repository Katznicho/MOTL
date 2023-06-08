import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import TopBar from '../../../components/AppBars/TopBar';
import { theme } from '../../../theme/theme';
import HomeScreen from '../HomeScreen';
import Fixtures from './Fixtures';

const Stack = createStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="FixtureScreen"
        component={Fixtures}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"MOTL"}

              titleStyle={{
                color: `${theme.colors.textColor}`,
                marginLeft: 10,
                fontFamily: "LeagueGothic-Regular",
                fontStyle: 'normal',
                fontSize: 28,
                lineHeight:34,

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

export default CalendarStack

const styles = StyleSheet.create({})