import { StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

export default function Routes() {

    return (
        <NavigationContainer>
            <AuthStack></AuthStack>
        </NavigationContainer>
    );
}

