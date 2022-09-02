import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';
const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconStyle, onPress, iconPos }) => {
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
            {
                iconPos == 'LEFT' &&
                <Image
                    source={icon}
                    style={{
                        ...iconStyle,
                        ...styles.image
                    }}
                />
            }

            <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>
            {
                iconPos == 'RIGHT' &&
                <Image
                    source={icon}
                    style={{
                        ...iconStyle,
                        ...styles.image
                    }}
                />
            }

        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.blackMain
    }
});
export default TextIconButton;
