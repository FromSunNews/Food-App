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

const VerticalFoodCard = ({ containerStyle, item, onPress, indexFood, onPressFav }) => {
    return (
        <TouchableOpacity
            style={{
                width: 200,
                padding: SIZES.padding,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.whiteMain,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Calories and favourite */}
            <View style={{
                flexDirection: 'row'
            }}>
                {/* Calories */}
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <Image source={icons.calories}
                        style={{
                            width: 35,
                            height: 35
                        }}
                    />
                    <Text style={{
                        color: COLORS.darkGray2,
                        ...FONTS.body5
                    }}>{item.calories} Calories</Text>
                </View>
                {/* Favourite */}
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
                    />
                </TouchableOpacity>


            </View>
            {/* Image */}
            <View style={{
                height: 150,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    source={item.image}
                    style={{
                        height: 140,
                        width: 140,
                        resizeMode: 'contain'
                    }}
                />
            </View>
            {/* Info */}
            <View style={{
                alignItems: 'center',
                marginTop: -20
            }}>
                <Text style={{
                    ...FONTS.h3
                }}>{item.name}</Text>
                <Text style={{
                    color: COLORS.darkGray2,
                    textAlign: 'center',
                    ...FONTS.body5,

                }}>{item.description}</Text>
                <Text style={{
                    marginTop: SIZES.radius,
                    ...FONTS.h2
                }}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default VerticalFoodCard;
