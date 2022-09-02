import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
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
    IconLabel,
    TextButton,
    LineDivider,
    Rating, SteperInput
} from '../components'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { StackActions } from '@react-navigation/native';
const FoodDetail = (props) => {
    const { foodId } = props.route.params;
    const navigation = useNavigation();

    const dispatch = useDispatch()
    const favFood = useSelector(state => state.favFood)
    const indexFood = favFood.findIndex(item => item.id === foodId)
    const [selectedSize, setSelectedSize] = React.useState('')
    const [selectedIdSize, setSelectedIdSize] = React.useState('')
    const [qty, setQty] = React.useState(1)

    const foodItem = dummyData.food.find((item) => item.id === foodId);


    const renderHeader = () => {
        return (
            <Header
                title='DETAILS'
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'space-between',
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
                        quantity={3}
                    />
                }
            />
        )
    }
    const renderFoodDetail = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            >
                {/* Food Card */}
                <View
                    style={{
                        borderRadius: 15,
                        backgroundColor: COLORS.primary
                    }}
                >
                    {/* Calories and Favourites */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: SIZES.base,
                        paddingHorizontal: SIZES.radius

                    }}>
                        {/* Calories */}
                        <View style={{
                            flexDirection: 'row',

                        }}>
                            <Image source={icons.calories}
                                style={{
                                    width: 35,
                                    height: 35,
                                }}
                            ></Image>

                            <Text style={{
                                color: COLORS.darkGray,
                                ...FONTS.body4
                            }}>{foodItem.calories} {foodItem?.calories > 1 ? 'calories' : 'calory'}</Text>
                        </View>

                        {/* Favourite */}
                        <TouchableOpacity
                            onPress={() => dispatch({ type: 'addFav', idFood: foodId })}>
                            <Image
                                source={icons.love}
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: indexFood >= 0 ? COLORS.red : COLORS.gray

                                }}
                            ></Image>
                        </TouchableOpacity>

                    </View>
                    {/* Food Img */}
                    <Image
                        source={foodItem?.image}
                        style={{
                            height: 130,
                            width: '100%',
                            resizeMode: 'contain',
                            marginBottom: 20

                        }}

                    ></Image>


                </View>
                {/* Food info */}
                <View style={{
                    marginTop: SIZES.padding
                }}>
                    {/* Name and description */}
                    <Text style={{
                        ...FONTS.h1
                    }}>{foodItem?.name}</Text>
                    <Text style={{
                        marginTop: SIZES.base,
                        color: COLORS.darkGray,
                        textAlign: 'justify',
                        ...FONTS.body3
                    }}>{foodItem?.detail_description}</Text>
                </View>
                {/* Ratings and Duration,Shipping */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    justifyContent: 'space-between'
                }}>
                    {/* Ratings */}
                    <IconLabel
                        containerStyle={{
                            backgroundColor: COLORS.blackMain,

                        }}
                        icon={icons.star}
                        label={foodItem.ratings}
                        labelStyle={{
                            color: COLORS.whiteMain
                        }}
                    />
                    {/* Duration */}
                    <IconLabel

                        icon={icons.clock}
                        iconStyle={{
                            tintColor: COLORS.blackMain
                        }}
                        label={foodItem.time_cook}
                        labelStyle={{
                            color: COLORS.blackMain
                        }}
                    />
                    {/* Shipping */}
                    <IconLabel
                        containerStyle={{
                            marginLeft: SIZES.radius,
                            paddingHorizontal: 0
                        }}
                        icon={icons.dollar}
                        iconStyle={{
                            tintColor: COLORS.blackMain
                        }}
                        label={foodItem.fee_shipping == 0 ? 'Free Shipping' : `$${foodItem.fee_shipping} Delivery`}
                        labelStyle={{
                            color: COLORS.blackMain
                        }}
                    />
                </View>
                {/* Sizes */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        ...FONTS.body3,
                        fontSize: 18
                    }}>Sizes :</Text>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {dummyData.sizes.map((item, index) => {
                            return (
                                <TextButton
                                    key={`Sizes-${index}`}
                                    buttonContainerStyle={{
                                        width: 55,
                                        height: 55,
                                        margin: SIZES.base,
                                        borderWidth: 1,
                                        borderRadius: SIZES.radius,
                                        borderColor: selectedIdSize == item.id ? COLORS.blackMain : COLORS.darkGray,
                                        backgroundColor: selectedIdSize == item.id ? COLORS.yellowMain : COLORS.primary,

                                    }}
                                    label={item.label}
                                    labelStyle={{
                                        color: selectedSize == item.id ? COLORS.blackMain : COLORS.darkGray,
                                        ...FONTS.body3
                                    }}
                                    label2=''
                                    onPress={() => {
                                        setSelectedIdSize(item.id)
                                        setSelectedSize(item.label)
                                    }}
                                />
                            )
                        })}
                    </View>
                </View>
            </View >
        )
    }
    const renderRestaurant = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                    source={images.profile} />
                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center',

                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>ByProgrammers</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.gray }}>1.2 KM away from you</Text>
                </View>
                {/* Rating */}
                <Rating
                    rating={4}
                    iconStyle={{
                        marginLeft: 3
                    }}
                />
            </View>
        )
    }
    const renderFooter = () => {
        return (<View style={{
            flexDirection: 'row',
            height: 120,
            alignItems: 'center',
            paddingHorizontal: SIZES.padding,
            paddingBottom: SIZES.radius
        }}>
            {/* Steper Input */}
            <SteperInput
                value={qty}
                onAdd={() => {
                    setQty(qty + 1)
                }}
                onMinus={() => {
                    if (qty > 1)
                        setQty(qty - 1)
                }}
            />
            {/* Text Button */}
            <TextButton
                buttonContainerStyle={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 60,
                    marginLeft: 25,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: selectedSize == '' ? COLORS.darkGray2 : COLORS.yellowMain,
                    borderRadius: SIZES.radius,
                    borderWidth: 1
                }}
                disabled={selectedSize == ''}
                label='Add To Cart'
                label2=''
                labelStyle={{
                    fontSize: 18
                }}
                labelStyle2={{
                    fontSize: 18
                }}
                onPress={() => {
                    navigation.dispatch(
                        StackActions.replace('MyCart')
                    )
                    dispatch({
                        type: 'addCart', myCart: {
                            idFood: foodId,
                            qty: qty,
                            size: selectedSize
                        }
                    })
                }}
            />
        </View>)

    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.whiteMain
        }}>
            {/* Header */}
            {renderHeader()}
            {/* Body */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Food Detail */}
                {renderFoodDetail()}
                <LineDivider
                    lineStyle={{
                        marginLeft: SIZES.padding,
                        marginRight: SIZES.padding
                    }}
                />
                {/* Restaurant */}
                {renderRestaurant()}
                <LineDivider
                    lineStyle={{
                        marginLeft: SIZES.padding,
                        marginRight: SIZES.padding
                    }}
                />
                {renderFooter()}
            </ScrollView>
            {/* Footer */}
        </View>
    );
};

export default FoodDetail;
