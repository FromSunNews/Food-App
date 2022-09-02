import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import OnboardingScreen from '../initiatory/OnboardingScreen';
// import LoginScreen from '../initiatory/LoginScreen';
// import SignupScreen from '../initiatory/SignupScreen';
import DashboardScreen from '../initiatory/DashBoardScreen';
import CreatePost from '../screens/CreatePost';
import FoodDetail from '../screens/FoodDetail';
import MyCart from '../screens/MyCart';
import MyCard from '../screens/MyCard';
import Checkout from '../screens/Checkout';
import AddCard from '../screens/AddCard';
import Success from '../screens/Success';
import DeliveryStatus from '../screens/DeliveryStatus';
import Map from '../screens/Map';
import ChatRoom from '../screens/ChatRoom';


import { useState, useEffect } from 'react';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DashBoardScreen from '../initiatory/DashBoardScreen';
import MyWalletScreen from '../screens/MyWalletScreen';

export default function App() {
    const AppStack = createNativeStackNavigator();
    const [isFirstLauch, setisFirstLauch] = useState(null);
    let routeName = 'DashBoard';
    // useEffect(() => {
    //     AsyncStorage.getItem('alreadyLauched').then(value => {
    //         if (value == null) {
    //             AsyncStorage.setItem('alreadyLauched', 'true');
    //             setisFirstLauch(true);
    //         } else {
    //             setisFirstLauch(false)
    //         }
    //     });
    // }, []);
    // if (isFirstLauch == null) {
    //     console.log('null')
    //     return null;
    // } else if (isFirstLauch == true) {
    //     console.log('true')
    //     routeName = 'Onboarding'
    // } else {
    //     console.log('false')
    //     routeName = 'Login'
    // }
    return (
        <AppStack.Navigator initialRouteName={routeName}>
            {/* <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />
            <AppStack.Screen name="Login" component={LoginScreen} options={{ header: () => null }}></AppStack.Screen>
            <AppStack.Screen name="Signup" component={SignupScreen} options={({ navigation }) => ({
                title: 'Login',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0
                },
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <FontAwesome.Button
                            name='long-arrow-left'
                            size={25}
                            backgroundColor='#f9fafd'
                            color='#333'
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                ),
            })}></AppStack.Screen> */}
            <AppStack.Screen name="DashBoard" component={DashBoardScreen} options={{ header: () => null }} />
            <AppStack.Screen name="CreatePost" component={CreatePost} options={{ header: () => null }} />
            <AppStack.Screen name="FoodDetail" component={FoodDetail} options={{ header: () => null }} />
            <AppStack.Screen name="MyCart" component={MyCart} options={{ header: () => null }} />
            <AppStack.Screen name="MyCard" component={MyCard} options={{ header: () => null }} />
            <AppStack.Screen name="Checkout" component={Checkout} options={{ header: () => null }} />
            <AppStack.Screen name="AddCard" component={AddCard} options={{ header: () => null }} />
            <AppStack.Screen name="Success" component={Success} options={{ header: () => null }} />
            <AppStack.Screen name="DeliveryStatus" component={DeliveryStatus} options={{ header: () => null }} />
            <AppStack.Screen name="Map" component={Map} options={{ header: () => null }} />
            <AppStack.Screen name="ChatRoom" component={ChatRoom} options={{ header: () => null }} />



        </AppStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
