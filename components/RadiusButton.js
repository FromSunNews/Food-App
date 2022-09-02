import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData
} from '../constants';

const RadiusButton = ({ containerStyle, label, labelStyle, iconStyle, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={onPress}

        >
            <Image
                source={isSelected ? icons.check_on : icons.check_off}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: isSelected ? COLORS.blackMain : COLORS.gray,
                    marginLeft: 10,
                    ...iconStyle
                }}
            />
            <Text style={{
                marginLeft: SIZES.radius,
                color: !isSelected ? COLORS.gray : COLORS.blackMain,
                ...FONTS.body3,
                ...labelStyle
            }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default RadiusButton