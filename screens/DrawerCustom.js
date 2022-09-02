import { TouchableOpacity, View, Image, Animated, Dimensions, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePost from '../screens/CreatePost';
import MyCart from '../screens/MyCart';

import { FontAwesome5 } from '@expo/vector-icons'

import { useRef } from 'react';
import colors from "../color.js";

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
import { useDispatch, useSelector } from 'react-redux'

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';

import menu from '../assets/icons/menu.png';
import { useNavigation } from '@react-navigation/native';

const DrawerCustom = () => {
    const myCart = useSelector(state => state.myCart);

    const Tab = createBottomTabNavigator();
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    const getWidth = () => {
        let width = Dimensions.get('window').width;
        width -= 80;
        return width / 5;

    }
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator screenOptions={{
                'tabBarShowLabel': false,
                'tabBarStyle': {
                    backgroundColor: colors.black,
                    position: 'absolute',
                    bottom: 40,
                    height: 60,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,

                }
            }}
            >
                <Tab.Screen name={'Home'} component={HomeScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: 15 }}>
                            <FontAwesome5 name='home' size={20} color={focused ? colors.yellow : colors.gray} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>
                <Tab.Screen name={'Search'} component={SearchScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: 15 }}>
                            <FontAwesome5 name='search' size={20} color={focused ? colors.yellow : colors.gray} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>
                <Tab.Screen name='MyCart' component={MyCart} options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <TouchableOpacity onPress={() => { navigation.navigate('MyCart') }}>
                            <View style={{
                                width: 60, height: 60, borderRadius: 30, backgroundColor: colors.yellow, justifyContent: 'center', alignItems: 'center', bottom: 15,
                                borderColor: colors.white, borderWidth: 5,
                            }}>

                                <FontAwesome5 name="shopping-cart" size={20} color={colors.white} style={{ width: 25, height: 25, tintColor: 'white' }} />
                            </View>
                            {myCart.length > 0 ?
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: COLORS.red,
                                        borderRadius: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        elevation: 20,
                                        bottom: 70,
                                        left: 35
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color: COLORS.whiteMain
                                        }}
                                    >{myCart.length}</Text>
                                </View>
                                : null
                            }

                        </TouchableOpacity>
                    )
                }}></Tab.Screen>
                <Tab.Screen name={'Message'} component={MessageScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: 15 }}>
                            <FontAwesome5 name='paper-plane' size={20} color={focused ? colors.yellow : colors.gray} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>
                <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: 15 }}>
                            <FontAwesome5 name='user-alt' size={20} color={focused ? colors.yellow : colors.gray} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 4,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>
            </Tab.Navigator>
            <Animated.View style={{
                width: 5, height: 5, backgroundColor: colors.yellow, position: 'absolute', bottom: 50, left: 67, borderRadius: 10,
                transform: [{ translateX: tabOffsetValue }], elevation: 20
            }}></Animated.View>

        </View>
    )
};

export default DrawerCustom;
