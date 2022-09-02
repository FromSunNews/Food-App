import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData
} from '../constants';

const CartQuatityButton = ({ containerStyle, iconStyle, quantity, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.whiteMain,
                ...containerStyle,
                borderWidth: 1,
            }}
            onPress={onPress}
        >
            <Image
                source={icons.history}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.blackMain,
                    ...iconStyle
                }}
            ></Image>
            {/* <View
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.yellowMain
                }}

            >
                <Text
                    style={{
                        color: COLORS.blackMain,
                        fontSize: 8
                    }}
                >{quantity}</Text>
            </View> */}
        </TouchableOpacity>
    );
};

export default CartQuatityButton;
