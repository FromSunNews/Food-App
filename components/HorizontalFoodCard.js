import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress, indexFood, onPressFav }) => {
    return (
        <TouchableOpacity
            style={{
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.whiteMain,
                paddingHorizontal: 12,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    top: 10
                }}
            >

                {/* Calories*/}
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Image source={icons.calories}
                        style={{
                            width: 35,
                            height: 35,

                        }}
                    ></Image>
                    <Text style={{
                        color: COLORS.darkGray2,
                        ...FONTS.body4,
                        marginTop: 2
                    }}>{item.calories} Calories</Text>
                </View>
                <TouchableOpacity
                    onPress={onPressFav}
                >
                    <Image
                        source={icons.love}
                        style={{
                            width: 22,
                            height: 22,
                            tintColor: indexFood >= 0 ? COLORS.red : COLORS.darkGray2
                        }}
                    ></Image>
                </TouchableOpacity>

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {/*image*/}
                <Image
                    source={item.image}
                    style={imageStyle}
                ></Image>
                {/*infomation product*/}
                <View style={{ flex: 1 }}>
                    {/* Name */}
                    <Text style={{ ...FONTS.h3, fontSize: 16 }}>{item.name}</Text>
                    {/* Description */}
                    <Text style={{ ...FONTS.body4, color: COLORS.darkGray2, fontSize: 14 }} numberOfLines={2}>{item.description}</Text>
                    {/* Price */}
                    <Text style={{ ...FONTS.h2, marginTop: SIZES.base }}>${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default HorizontalFoodCard;
