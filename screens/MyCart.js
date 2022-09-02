import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData
} from '../constants';
import {
    Header,
    IconButton,
    CartQuatityButton,
    SteperInput,
    FooterTotal
} from '../components'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
const MyCart = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch()
    const myCart = useSelector(state => state.myCart)

    const [foodFee, setFoodFee] = React.useState(0)
    const [shippingFee, setShippingFee] = React.useState(0)
    const [total, setTotal] = React.useState(0)

    useEffect(() => {
        let foodFee = 0
        let shippingFee = 0
        let total = 0
        myCart.forEach(item => {
            foodFee = foodFee + (item.price * item.qty)
            shippingFee = shippingFee + item.fee_shipping
        });
        setFoodFee(foodFee)
        setShippingFee(shippingFee)
        setTotal(foodFee + shippingFee)
    }, [myCart, foodFee, shippingFee, total])


    // const updateQuantityHandler = (newQty, id) => {
    //     const newCartList = myCartList.map((item) => item.id == id ? { ...item, qty: newQty } : item)
    //     setMyCartList(newCartList)
    // }

    const removeMyCartHandler = (id) => {
        let newMyCartList = [...myCart]
        const index = newMyCartList.findIndex(cart => cart.id == id)
        newMyCartList.splice(index, 1)
        setMyCartList(newMyCartList)
    }

    const renderHeader = () => {
        return (
            <Header
                title='MY CART'
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center',
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
                        onPress={() => navigation.goBack()}

                    ></IconButton>
                }
                rightComponent={
                    <CartQuatityButton
                        onPress={() => navigation.navigate('CreatePost')}
                    />
                }
            />
        )
    }
    const renderCartList = () => {
        return (
            <SwipeListView
                data={myCart}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,

                }}
                disableRightSwipe
                rightOpenValue={-75}
                renderItem={(data, rowMap) => {
                    return (
                        <View
                            style={{
                                height: 100,
                                backgroundColor: COLORS.primary,
                                ...styles.cartItemContainer
                            }}
                        >
                            {/* Food img */}
                            <View
                                style={{
                                    width: 80,
                                    height: 80
                                }}
                            >
                                <Image
                                    source={data.item.image}
                                    resizeMode='contain'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'contain'
                                    }}
                                />
                            </View>
                            {/* Food info */}
                            <View
                                style={{
                                    flex: 1,
                                    marginLeft: 10
                                }}
                            >
                                <Text
                                    style={{ ...FONTS.body3, fontWeight: 'bold', color: 'black' }}
                                >{data.item.name}</Text>
                                <Text
                                    style={{ ...FONTS.h3, fontWeight: 'bold', color: 'blue' }}
                                >Size: {data.item.size}</Text>
                                <Text
                                    style={{ ...FONTS.h3, fontWeight: 'bold', color: 'red', fontSize: 18 }}
                                >${data.item.price}</Text>
                            </View>
                            {/* Quantyti */}
                            <View
                                style={{
                                    height: 50,
                                    width: 50,
                                    backgroundColor: COLORS.lightGray2,
                                    borderWidth: 1,
                                    borderColor: COLORS.blackMain,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: SIZES.radius
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>{data.item.qty}</Text>
                            </View>
                        </View>
                    )
                }}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.red,
                            ...styles.cartItemContainer,
                        }}
                        icon={icons.deleted}
                        iconStyle={{ marginRight: 15, tintColor: COLORS.whiteMain, height: 25, width: 25 }}
                        onPress={() => dispatch({ type: 'DeleteFoodMyCart', foodId: data.item.id })}
                    />
                )}
            />
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.whiteMain
        }}>
            {/* Header */}
            {renderHeader()}

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}
            <FooterTotal
                subTotal={foodFee}
                shippingFee={shippingFee}
                total={total}
                isHaveCoupon={0}
                onPress={() => {
                    navigation.navigate('MyCard')
                    dispatch({
                        type: 'FeeMyCart', fee: {
                            foodFee: foodFee,
                            shippingFee: shippingFee,
                            total: total
                        }
                    })
                }

                }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
});
export default MyCart;
