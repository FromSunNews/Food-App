import { View, Text } from 'react-native';
import React from 'react';
import {
    IconButton
} from '../components'
import {
    FONTS,
    COLORS,
    SIZES,
    icons
} from '../constants';
const SteperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 60,
            width: 130,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            borderColor: COLORS.blackMain,
            ...containerStyle,
            borderWidth: 1
        }}>
            <IconButton
                containerStyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                icon={icons.minus}
                iconStyle={{
                    height: 20,
                    width: 20,
                    tintColor: value > 1 ? COLORS.blackMain : COLORS.lightGray1
                }}
                onPress={onMinus}
            />
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize: 20
                }}>
                    {value}
                </Text>
            </View>
            <IconButton
                containerStyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                icon={icons.plus}
                iconStyle={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.blackMain
                }}
                onPress={onAdd}
            />
        </View>
    );
};

export default SteperInput;
