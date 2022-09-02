import { TouchableOpacity, View, Image, Animated, Dimensions, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import MyWalletScreen from '../screens/MyWalletScreen';

import { FontAwesome5 } from '@expo/vector-icons'

import { useRef } from 'react';


import DrawerCustom from '../screens/DrawerCustom';
import Favorite from '../screens/Favorite';

import React, { useState } from 'react';
import profile from '../assets/images/profile.png';
import home from '../assets/icons/home.png';
import wallet from '../assets/icons/wallet.png';
import notifications from '../assets/icons/notification.png';
import favourite from '../assets/icons/favourite.png';
import location from '../assets/icons/location.png';
import coupon from '../assets/icons/coupon.png';
import setting from '../assets/icons/setting.png';
import invite from '../assets/icons/profile.png';
import help from '../assets/icons/help.png';
import logout from '../assets/icons/logout.png';

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';
import { StatusBar } from 'expo-status-bar';

import { Auth } from 'aws-amplify';



export default function DashBoardScreen(props) {
    const Tab = createBottomTabNavigator();
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    const getWidth = () => {
        let width = Dimensions.get('window').width;
        width -= 80;
        return width / 5;
    }

    const [currentTab, setCurrentTab] = useState('Dash Board');


    const [showMenu, setShowMenu] = React.useState(false);
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    const TabButton = (currentTab, setCurrentTab, title, name) => {
        return (
            <>
                <StatusBar style='auto' />
                <TouchableOpacity onPress={() => {
                    if (title == 'Logout') {
                        Auth.signOut();
                    }
                    else {
                        setCurrentTab(title)
                        Animated.timing(scaleValue, {
                            toValue: showMenu ? 1 : 0.88,
                            duration: 300,
                            useNativeDriver: true
                        }).start()

                        Animated.timing(offsetValue, {
                            toValue: showMenu ? 0 : 250,
                            duration: 300,
                            useNativeDriver: true
                        }).start()
                        setShowMenu(!showMenu)
                    }

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 8,
                        backgroundColor: currentTab == title ? COLORS.yellowMain : 'transparent',
                        borderRadius: 8,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginTop: 10,
                        borderWidth: currentTab == title ? 1 : 0
                    }}>
                        <Image source={name} style={{
                            width: 18,
                            height: 18,
                            tintColor: COLORS.blackMain
                        }}></Image>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            paddingLeft: 15,
                        }}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </>

        );
    }
    const renderElement = () => {
        if (currentTab == 'Dash Board')
            return <DrawerCustom></DrawerCustom>
        else if (currentTab == 'My Wallet')
            return <MyWalletScreen></MyWalletScreen>
        else if (currentTab == 'Favorites')
            return <Favorite></Favorite>
        return null;
    }




    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ justifyContent: 'flex-start', padding: SIZES.padding }}>
                    <Image source={profile} style={{
                        width: 60,
                        height: 60,
                        borderRadius: SIZES.radius,
                        marginTop: 25
                    }}></Image>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: COLORS.blackMain,
                        marginTop: 15,
                    }}>Từ Nhật Phương</Text>
                    <TouchableOpacity>
                        <Text style={{
                            marginTop: 6,
                            color: 'blue',
                            fontWeight: 'bold'
                        }}>View Profile</Text>
                    </TouchableOpacity>

                    <View style={{ flexGrow: 1, marginTop: 40 }}>
                        {TabButton(currentTab, setCurrentTab, 'Dash Board', home)}
                        {TabButton(currentTab, setCurrentTab, 'My Wallet', wallet)}
                        {TabButton(currentTab, setCurrentTab, 'Notification', notifications)}
                        {TabButton(currentTab, setCurrentTab, 'Favorites', favourite)}
                    </View>
                    <View style={{
                        marginTop: 15,
                        width: SIZES.width / 2,
                        height: 1,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: COLORS.blackMain
                    }}></View>
                    <View style={{ marginTop: 10 }}>
                        {TabButton(currentTab, setCurrentTab, 'Track Your Order', location)}
                        {TabButton(currentTab, setCurrentTab, 'Counpons', coupon)}
                        {TabButton(currentTab, setCurrentTab, 'Settings', setting)}
                        {TabButton(currentTab, setCurrentTab, 'Invite Friends', invite)}
                        {TabButton(currentTab, setCurrentTab, 'Help Center', help)}
                    </View>
                    <View style={{ marginTop: 50 }}>
                        {TabButton(currentTab, setCurrentTab, 'Logout', logout)}
                    </View>
                </View>
            </ScrollView>
            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: COLORS.whiteMain,
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                shadowColor: "#000",
                shadowOffset: {
                    width: 5,
                    height: 5,
                },
                shadowOpacity: 10,
                shadowRadius: 16.00,
                elevation: 15,
                transform: [
                    { scale: scaleValue },
                    { translateX: offsetValue }
                ],
                borderTopLeftRadius: showMenu ? SIZES.radius : 0,
                borderBottomLeftRadius: showMenu ? SIZES.radius : 0
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                    marginBottom: 5,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 42,
                        height: 42
                        , borderRadius: 10,
                        borderWidth: 1
                    }}>
                        <TouchableOpacity style={{}} onPress={() => {

                            Animated.timing(scaleValue, {
                                toValue: showMenu ? 1 : 0.88,
                                duration: 300,
                                useNativeDriver: true
                            }).start()

                            Animated.timing(offsetValue, {
                                toValue: showMenu ? 0 : 250,
                                duration: 300,
                                useNativeDriver: true
                            }).start()

                            setShowMenu(!showMenu);
                        }}>

                            <FontAwesome5 name={showMenu ? 'times' : 'bars'} size={25} color='black' style={{
                            }}></FontAwesome5>


                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>


                            <Text style={{
                                color: 'black',
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>Từ Nhật Phương</Text>
                            {/* <TouchableOpacity style={{
                                borderWidth: 1,
                                marginLeft: SIZES.base,
                                borderRadius: 5,
                                borderColor: COLORS.red,
                                width: 25,
                                height: 25,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image source={icons.down_arrow}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: COLORS.red,
                                    }}
                                />
                            </TouchableOpacity> */}

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image source={icons.location}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: 'black',
                                    marginRight: 5,
                                    tintColor: COLORS.red
                                }}
                            />
                            <Text style={{
                                fontSize: 14
                            }}>
                                {/* {dummyData?.myProfile.address} */}
                                No. 88, HCM city,...
                            </Text>
                        </View>


                    </View>
                </View>


                {renderElement()}



            </Animated.View>


        </SafeAreaView >
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.whiteMain,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
});




