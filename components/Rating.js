import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { icons, COLORS } from '../constants';

const Rating = ({ rating, iconStyle }) => {
    return (
        <View style={{
            flexDirection: 'row',

        }}>
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 1 ? COLORS.yellowMain : COLORS.gray,
                    ...styles.rating,
                    ...iconStyle
                }}
            ></Image>
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 2 ? COLORS.yellowMain : COLORS.gray,
                    ...styles.rating,
                    ...iconStyle
                }}
            ></Image>
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 3 ? COLORS.yellowMain : COLORS.gray,
                    ...styles.rating,
                    ...iconStyle
                }}
            ></Image>
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 4 ? COLORS.yellowMain : COLORS.gray,
                    ...styles.rating,
                    ...iconStyle
                }}
            ></Image>
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 5 ? COLORS.yellowMain : COLORS.gray,
                    ...styles.rating,
                    ...iconStyle
                }}
            ></Image>
        </View>
    );
};
const styles = StyleSheet.create({
    rating: {
        height: 15,
        width: 15
    }
});
export default Rating;
