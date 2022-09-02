import { View, Text } from 'react-native';
import React from 'react';
import {
    FONTS,
    COLORS
} from '../constants'


const Header = ({ containerStyle, title, titleStyle, leftComponent, rightComponent }) => {
    return (
        <View style={{
            height: 60,
            flexDirection: 'row',
            backgroundColor: COLORS.whiteMain,
            ...containerStyle
        }}>
            {leftComponent}

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    ...FONTS.h3,
                    ...titleStyle
                }}>{title}</Text>
            </View>
            {rightComponent}
        </View>
    );
};

export default Header;
