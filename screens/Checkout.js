import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
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
    FormInputCard,
    Header,
    IconButton,
    FooterTotal,
    CardItem
} from '../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
const Checkout = ({ route }) => {
    const fee = useSelector(state => state.fee)
    const couponOjb = useSelector(state => state.confirmCodeCoupon)

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [selectedCard, setSelectedCard] = React.useState(null)

    const [codeCoupon, setCodeCoupon] = React.useState('')
    React.useEffect(() => {
        let { selectedCard } = route.params
        setSelectedCard(selectedCard)
        if (couponOjb.id >= 1) {
            Alert.alert('🎊 Congratulation! 🎊', `${couponOjb.label} 🎉`)
        }
    }, [couponOjb])

    const renderHeader = () => {
        return (
            <Header
                title='CHECKOUT'
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center'
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.blackMain,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.blackMain,
                        }}
                        onPress={() => {
                            navigation.goBack()
                            dispatch({ type: 'removeConfirmCouponCode' })
                        }}

                    ></IconButton>
                }
                rightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }
    const renderMyCard = () => {
        return (
            <View>
                {selectedCard && dummyData.myCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: 'MyCard' })}
                        />
                    )
                })}
            </View>
        )
    }
    const renderDeliveryAddress = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2

                    }}
                >
                    <Image
                        source={icons.location1}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: COLORS.blackMain
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: SIZES.radius,
                            width: '75%',
                            ...FONTS.body3
                        }}
                    >300 Post Street San Frasico, CA </Text>

                </View>
            </View>
        )
    }
    const renderCoupon = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
                <FormInputCard
                    inputContainerStyle={{
                        marginTop: 0,
                        paddingLeft: SIZES.padding,
                        paddingRight: 0,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.whiteMain,
                        overflow: 'hidden',
                        height: 60
                    }}
                    placeholder='Input Coupon Code Inorder To Sale'
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.yellowMain
                            }}
                            onPress={() => {
                                dispatch(
                                    {
                                        type: 'codeCoupon',
                                        couponCode: codeCoupon
                                    })
                            }
                            }
                        >
                            <Image
                                source={icons.coupon}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: COLORS.blackMain
                                }}
                            />
                        </TouchableOpacity>
                    }
                    onChange={(value) => setCodeCoupon(value)}
                    value={codeCoupon}
                />
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.whiteMain
        }}>
            {/* Header */}
            {renderHeader()}
            {/* Body */}
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={-200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20,

                }}
            >
                {/* Card */}
                {renderMyCard()}
                {/* Delivery Address */}
                {renderDeliveryAddress()}
                {/* Coupon */}
                {renderCoupon()}
            </KeyboardAwareScrollView>
            {/* Footer */}
            <FooterTotal
                subTotal={fee.foodFee}
                subTotal2={(1 - couponOjb.saleOnFood) * fee.foodFee}
                shippingFee={fee.shippingFee}
                shippingFee2={(1 - couponOjb.saleOnShipping) * fee.shippingFee}
                total={fee.total}
                total2={(1 - couponOjb.saleOnFood) * fee.foodFee + (1 - couponOjb.saleOnShipping) * fee.shippingFee}
                onPress={() => {
                    navigation.navigate('Success')
                    dispatch({ type: 'removeConfirmCouponCode' })
                    dispatch({ type: 'removeCart' })
                }}
                isHaveCoupon={couponOjb.saleOnFood != null ? 1 : 0}

            />
        </View>
    )
}

export default Checkout