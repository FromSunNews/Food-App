import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';
const TextButton = ({ label, labelStyle, label2, labelStyle2, buttonContainerStyle, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                ...buttonContainerStyle
            }}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={{
                ...FONTS.h3,
                ...labelStyle
            }}>{label}</Text>
            {label2 != "" &&
                <Text style={{
                    flex: 1,
                    textAlign: 'right',
                    color: COLORS.blackMain,
                    ...FONTS.h3,
                    ...labelStyle2
                }}>{label2}</Text>
            }
        </TouchableOpacity>
    );
};

export default TextButton;
