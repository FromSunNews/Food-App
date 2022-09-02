import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { COLORS, FONTS, SIZES } from '../constants'
const TwoPointSlider = ({ values, min, max, prefix, postfix, onValuesChange }) => {
    return (
        <MultiSlider
            values={values}
            sliderLength={SIZES.width - (SIZES.padding * 2) - 48}
            min={min}
            max={max}
            step={1}
            markerOffsetY={20}
            selectedStyle={{
                backgroundColor: COLORS.yellowMain,
            }}
            trackStyle={{
                height: 10,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
            }}

            customMarker={(e) => {
                return (
                    <View style={{
                        height: 60,
                        width: 60,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            borderWidth: 4,
                            borderColor: COLORS.whiteMain,
                            backgroundColor: COLORS.yellowMain,
                            ...styles.shadow,
                            marginBottom: 5,
                        }}></View>
                        <Text style={{
                            marginTop: 5,
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}>
                            {prefix}{e.currentValue} {postfix}</Text>
                    </View>
                )
            }}
            onValuesChange={(values) => onValuesChange(values)}
        ></MultiSlider>
    );
};
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 1,
        shadowOpacity: 0.5,
        elevation: 5
    },
    shadow1: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 1,
        shadowOpacity: 0.3,
        elevation: 3
    }
});

export default TwoPointSlider;
