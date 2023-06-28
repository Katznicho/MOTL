import React from "react";
import { Appbar, Badge } from 'react-native-paper';
import { View, StyleSheet, Platform } from "react-native";
import { theme } from "../../theme/theme";
import { generalstyles } from "../../generalstyles/generalstyles";
import { Image } from "react-native";


const TopBar = ({ navigation, previous, title, titleStyle }: any) => {

    return (
        <Appbar.Header

            style={{
                backgroundColor: `${theme.colors.primary}`,
                width: "100%",
                marginBottom: 5,
                alignItems: 'center',
                marginLeft: 30,
                height: 45,
                ...Platform.select({
                    ios: {
                        marginTop: 0,
                    },
                    android: {
                        marginTop: 0,
                    },
                }),
                borderWidth: 0,
                borderColor: theme.colors.primary,

            }}
        >
            {/* user image and title */}

            {/* <Avatar.Icon size={35} icon="account" style={{
                backgroundColor: `${theme.colors.white}`,
                marginRight: 5
            }} /> */}
            <Image
                resizeMode="cover"
                source={require("../../assets/image-1705.png")}
            />
            <Appbar.Content
                title={title}
                titleStyle={titleStyle}
            />


            {/* user image and title */}

            {/* {previous ?

                <Appbar.BackAction onPress={navigation.goBack} color={`${theme.colors.white}`} />
                : null} */}


            {/* icon section */}


            <View style={[generalstyles.flexStyles,
            {
                marginLeft: 10,
            }
            ]}>
                <Appbar.Action icon="bell-outline"
                    size={25}
                    onPress={() => { }} color={`${theme.colors.white}`}
                />
                <Badge style={styles.badgeStyle}>3</Badge>
            </View>

            <Image
                style={[styles.iconSearchOutline, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../../assets/-icon-search-outline2.png")}
            />




            {/* icon section */}





        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    appHeaderStyle: {
        backgroundColor: `${theme.colors.primary}`,
        width: "100%",
        height: 60,
    },
    badgeStyle: {
        position: 'absolute',
        top: 5,
        right: 5,
        color: `${theme.colors.white}`,
        backgroundColor: theme.colors.red,
        fontWeight: "600",
        fontSize: 10,
        zIndex: 20,
        fontFamily: "Montserrat-VariableFont_wght",
        fontStyle: 'normal',
        lineHeight: 20,
    },
    titleStyle: {
        marginTop: -10,
        color: `${theme.colors.primary}`
    },
    iconGroupLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    iconSearchOutline: {
        marginRight: 40,
    },
})
export default TopBar