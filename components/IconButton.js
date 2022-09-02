import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
    return (
        <TouchableOpacity style={{
            ...containerStyle

        }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    ...iconStyle

                }}
            ></Image>
        </TouchableOpacity>
    );
};

export default IconButton;
