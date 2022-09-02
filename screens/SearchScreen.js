import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';
import {
    HorizontalFoodCard,
    VerticalFoodCard,
    FilterModal
} from '../components'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
function SearchScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const favFood = useSelector(state => state.favFood)

    const [filterData, setFilterData] = React.useState([])
    const [masterData, setMasterData] = React.useState([])
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        setFilterData(dummyData.food)
        setMasterData(dummyData.food)
    }, [])
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter(item => item.name.includes(text))
            setFilterData(newData)
            setSearch(text)
        } else {
            setFilterData(masterData)
            setSearch(text)
        }
    }
    const renderSearch = () => {
        return (

            <View style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: COLORS.whiteMain,
                marginBottom: 20

            }}>
                {/* icon search*/}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: 'black'
                    }}
                ></Image>
                {/*text */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder='Search food ...'
                    onChangeText={(text) => searchFilter(text)}
                    value={search}
                ></TextInput>
            </View>


        )

    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.whiteMain }}>
            {/* Label */}
            <Text style={{
                marginTop: 10,
                marginLeft: SIZES.padding,
                fontSize: 24,
                fontWeight: 'bold',
                color: 'black'
            }}>SEARCH</Text>

            {renderSearch()}


            {/* List */}
            <FlatList
                data={filterData}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    const indexFood = favFood.findIndex(food => food.id === item.id)
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 150,
                                marginHorizontal: SIZES.padding,
                                marginBottom: index == filterData.length - 1 ? 135 : SIZES.radius,
                                backgroundColor: COLORS.primary

                            }}
                            imageStyle={{
                                marginHorizontal: 10,
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
            >

            </FlatList>
        </View>
    );
}
export default SearchScreen;