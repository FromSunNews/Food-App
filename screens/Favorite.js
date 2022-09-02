import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
    images
} from '../constants';
import {
    HorizontalFoodCard,
    TextButton
} from '../components'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
const Favorite = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const favFood = useSelector(state => state.favFood)
    if (favFood.length == 0)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{
                    ...FONTS.h1,
                    color: COLORS.darkGray

                }}
                >No favorite foods !</Text>
                <Image
                    source={images.empty}
                    style={{
                        width: 300,
                        height: 300
                    }}
                ></Image>
            </View>
        )
    else
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.whiteMain }}>
                {/* Label */}
                <Text style={{
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: SIZES.padding,
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'black'
                }}>FAVORITES</Text>


                {/* List */}
                <FlatList
                    data={favFood}
                    // keyExtractor={(item) => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const indexFood = favFood.findIndex(food => food.id === item.id)
                        return (
                            <HorizontalFoodCard
                                containerStyle={{
                                    height: 150,
                                    marginHorizontal: SIZES.padding,
                                    backgroundColor: COLORS.primary,
                                    marginBottom: index == favFood.length - 1 ? 40 : 0,
                                    marginTop: 15

                                }}
                                imageStyle={{
                                    marginRight: 10,
                                    height: 110,
                                    width: 110,
                                    resizeMode: 'contain'
                                }}
                                item={item}
                                onPress={() => navigation.navigate('FoodDetail', { foodId: item.id })}
                                indexFood={indexFood}
                                onPressFav={() => dispatch({ type: 'addFav', idFood: item.id })}

                            >

                            </HorizontalFoodCard>
                        )
                    }}
                    style={{
                        flex: 1
                    }}
                >

                </FlatList>
                <TextButton
                    buttonContainerStyle={{
                        flexDirection: 'row',
                        height: 60,
                        backgroundColor: COLORS.yellowMain,
                        borderRadius: SIZES.radius,
                        borderWidth: 1,
                        marginHorizontal: SIZES.padding,
                        marginBottom: 20,
                        marginTop: 20
                    }}
                    label='Delete All Foods'
                    label2=''
                    labelStyle={{
                        fontSize: 18
                    }}
                    onPress={() => {
                        dispatch({ type: 'deleteAllFoods' })
                    }}
                />
            </View >
        )
}

export default Favorite