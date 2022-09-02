import { View, Text, Platform } from 'react-native'
import React from 'react'
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData
} from '../constants';
import {
    TextButton, LineDivider
} from '../components'
import { LinearGradient } from 'expo-linear-gradient';

const FooterTotal = ({ subTotal, subTotal2 = 39.23, shippingFee, shippingFee2 = 213, total, total2 = 213.32, onPress, isHaveCoupon }) => {
    console.log('ishavecoupon : ', isHaveCoupon)

    return (
        <View>
            {/* Shadow */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.transparent, COLORS.lightGray1]}
                style={{
                    position: 'absolute',
                    top: -15,
                    left: 0,
                    right: 0,
                    height: Platform.OS === 'ios' ? 200 : 50,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,

                }}
            />
            {/* Order Details */}
            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.whiteMain,

                }}
            >
                {isHaveCoupon == 1 ?
                    <View>
                        <Text style={{
                            fontSize: 18,
                            color: 'black',
                            fontWeight: 'bold',
                            fontStyle: 'italic', marginBottom: 5, marginTop: 10
                        }}>Before having coupon code :</Text>
                        {/* Subtotal */}
                        <View
                            style={{
                                flexDirection: 'row',

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.body3, textDecorationLine: 'line-through', textDecorationColor: 'red' }}>Food Fee</Text>
                            <Text style={{ ...FONTS.h3, textDecorationLine: 'line-through', textDecorationColor: 'red' }}>${subTotal.toFixed(2)}</Text>
                        </View>
                        {/* Shipping fee */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.base

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.body3, textDecorationLine: 'line-through', textDecorationColor: 'red' }}>Shipping Fee</Text>
                            <Text style={{ ...FONTS.h3, textDecorationLine: 'line-through', textDecorationColor: 'red' }}>${shippingFee.toFixed(2)}</Text>
                        </View>
                        <Text style={{
                            fontSize: 18,
                            color: 'black',
                            fontWeight: 'bold',
                            fontStyle: 'italic', marginBottom: 5, marginTop: 10
                        }}>After having coupon code :</Text>
                        {/* Subtotal */}
                        <View
                            style={{
                                flexDirection: 'row',

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.body3 }}>Food Fee</Text>
                            <Text style={{ ...FONTS.h3 }}>${subTotal2.toFixed(2)}</Text>
                        </View>
                        {/* Shipping fee */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.base,
                                marginBottom: SIZES.padding

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.body3 }}>Shipping Fee</Text>
                            <Text style={{ ...FONTS.h3 }}>${shippingFee2.toFixed(2)}</Text>
                        </View>
                        {/* Line */}
                        <LineDivider />
                        {/* Total */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 10

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.h2, textDecorationLine: 'line-through', textDecorationColor: 'red' }}>Total</Text>
                            <Text style={{ ...FONTS.h2, textDecorationLine: 'line-through', textDecorationColor: 'red' }}>${total.toFixed(2)}</Text>
                        </View>
                        {/* Total */}
                        <View
                            style={{
                                flexDirection: 'row',

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.h2 }}>Total</Text>
                            <Text style={{ ...FONTS.h2 }}>${total2.toFixed(2)}</Text>
                        </View>
                    </View> :
                    <View>
                        {/* Subtotal */}
                        <View
                            style={{
                                flexDirection: 'row',

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.body3 }}>Food Fee</Text>
                            <Text style={{ ...FONTS.h3 }}>${subTotal.toFixed(2)}</Text>
                        </View>
                        {/* Shipping fee */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.base,
                                marginBottom: SIZES.padding

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.body3 }}>Shipping Fee</Text>
                            <Text style={{ ...FONTS.h3 }}>${shippingFee.toFixed(2)}</Text>
                        </View>
                        {/* Line */}
                        <LineDivider />
                        {/* Total */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.padding

                            }}
                        >
                            <Text style={{ flex: 1, ...FONTS.h2 }}>Total</Text>
                            <Text style={{ ...FONTS.h2 }}>${total.toFixed(2)}</Text>
                        </View>
                    </View>

                }

                {/* Button */}
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: total == 0 ? COLORS.darkGray2 : COLORS.yellowMain,
                        borderWidth: 1,
                        borderColor: COLORS.blackMain,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 3,
                            height: 5,
                        },
                        shadowRadius: 4.65,

                        elevation: 3,
                    }}
                    label='Place Your Order'
                    onPress={onPress}
                    labelStyle={{
                        color: COLORS.blackMain
                    }}
                    label2=''
                    disabled={total == 0}
                />
            </View>
        </View>

    )
}

export default FooterTotal