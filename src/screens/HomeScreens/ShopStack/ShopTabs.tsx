import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { theme } from '../../../theme/theme';
import SubcriptionScreen from '../../SubcriptionScreen/Subcription';
import Shop from '../../Shop';

const Tab = createMaterialTopTabNavigator();

const ShopTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="SUBSCRIPTIONSSTAB"
            backBehavior="order"
            sceneContainerStyle={{
                backgroundColor: theme.colors.screenBackground,
                flex: 1,
            }}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.primary,
                    elevation: 0, // Remove shadow on Android
                    shadowOpacity: 0, // Remove shadow on iOS
                    borderBottomWidth: 0, // Remove the bottom border
                    borderTopWidth: 0,
                    borderColor: theme.colors.primary,
                    width: 'auto',
                    paddingHorizontal: 40
                },
                tabBarAndroidRipple: { borderless: true },
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.white,
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: "600",
                    fontFamily: 'Poppins-Regular',
                    fontStyle: 'normal',
                    lineHeight: 20,
                    color: theme.colors.white,
                    width: 'auto',
                    justifyContent: 'center', // Add this line to center the tabs
                },

                tabBarIndicatorStyle: {
                    backgroundColor: theme.colors.red,
                    height: 4,
                    marginHorizontal: 50,
                },
                tabBarPressColor: theme.colors.primary,
                tabBarScrollEnabled: true,
                tabBarShowIcon: true,
                tabBarShowLabel: true,
                tabBarItemStyle: {
                    width: 'auto',
                    justifyContent: 'center', // Add this line to center the tabs
                    alignItems: "center"
                },
                tabBarContentContainerStyle: {
                    alignContent: "center",
                    width: 'auto',
                    justifyContent: 'center', // Add this line to center the tabs

                },


            }}

        >
            <Tab.Screen
                name="SUBSCRIPTIONSSTAB"
                component={Shop}
                options={{
                    tabBarLabel: 'SUBSCRIPTIONS',
                    tabBarAccessibilityLabel: 'SUBSCRIPTIONS',
                    //add some styling here
                }}
            />
            <Tab.Screen
                name="MERCHANDISETAB"
                component={Shop}
                options={{
                    tabBarLabel: 'MERCHANDISE',
                    tabBarAccessibilityLabel: 'MERCHANDISE',
                }}

            />
        </Tab.Navigator>
    );
};

export default ShopTabs;

const styles = StyleSheet.create({});








