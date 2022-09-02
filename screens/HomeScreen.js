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
const Section = ({ title, onPress, children }) => {
    return (
        <View >
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                marginTop: 25,
                marginBottom: 15
            }}>
                <Text style={{
                    flex: 1,
                    ...FONTS.h3
                }}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={{
                        color: COLORS.blue,
                        ...FONTS.body3
                    }}>Show All</Text>
                </TouchableOpacity>
            </View>
            {/* Content */}
            {children}
        </View>
    )
}

function HomeScreen() {

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const favFood = useSelector(state => state.favFood)

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [menuList, setMenuList] = React.useState([])
    const [recommend, setRecommend] = React.useState([])
    const [popular, setPopular] = React.useState([])
    const [showFilterModal, setShowFilterModal] = React.useState(false)
    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])
    //Handler
    const handleChangeCategory = (categoryId, menuTypeId) => {
        //Retrieve the popular menu
        let selectedPopular = dummyData.menu.find(a => a.name == 'Popular')
        //Retrieve the recommended menu 
        let setlectedRecommend = dummyData.menu.find(a => a.name == 'Recommended')
        //Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)
        //Set the popular menu based on the categoryId
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
        //Set the recommended menu based on the categoryId
        setRecommend(setlectedRecommend?.list.filter(a => a.categories.includes(categoryId)))
        //Set the menu based on the categoryId
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
    }
    //Render
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
                ></TextInput>
                {/*filter button */}
                <TouchableOpacity
                    onPress={() => setShowFilterModal(true)}
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: 'black'
                        }}
                    />
                </TouchableOpacity>
            </View>


        )

    }
    const renderMenuType = () => {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            // to when touch the last item, it will padding 
                            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId, item.id)
                        }}>
                        <Text style={{
                            color: selectedMenuType == item.id ? COLORS.red : COLORS.blackMain,
                            ...FONTS.h3
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            ></FlatList>
        )
    }
    const renderRecommendedSection = () => {
        return (
            <Section
                title='Recommended'
                onPress={() => console.log('Show all recommended')}
            >
                <FlatList
                    data={recommend}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const indexFood = favFood.findIndex(food => food.id === item.id)
                        return (
                            <HorizontalFoodCard
                                containerStyle={{
                                    height: 150,
                                    width: SIZES.width * 0.85,
                                    marginLeft: index == 0 ? SIZES.padding : 18,
                                    marginRight: index == recommend.length - 1 ? SIZES.padding : 0,
                                    paddingRight: SIZES.radius,
                                    backgroundColor: COLORS.primary
                                }}
                                imageStyle={{
                                    height: 110,
                                    width: 110,
                                    resizeMode: 'contain',
                                    marginHorizontal: 10
                                }}
                                item={item}
                                onPress={() => navigation.navigate('FoodDetail', { foodId: item.id })}
                                indexFood={indexFood}
                                onPressFav={() => dispatch({ type: 'addFav', idFood: item.id })}
                            />
                        )
                    }}
                />
            </Section>
        )
    }
    const renderPopularSection = () => {
        return (
            <Section
                title='Popular Near You'
                onPress={() => console.log('Show all')}
            >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const indexFood = favFood.findIndex(food => food.id === item.id)
                        return (
                            <VerticalFoodCard
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 18,
                                    marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                                    backgroundColor: COLORS.primary
                                }}
                                item={item}
                                onPress={() => navigation.navigate('FoodDetail', { foodId: item.id })}
                                indexFood={indexFood}
                                onPressFav={() => dispatch({ type: 'addFav', idFood: item.id })}
                            />
                        )
                    }
                    }
                />
            </Section>
        )

    }
    const renderFoodCategories = () => {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedCategoryId(item.id)
                            handleChangeCategory(item.id, selectedMenuType)
                        }}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 40,
                            marginTop: 15,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                            paddingHorizontal: 12,
                            borderRadius: 10,
                            backgroundColor: selectedCategoryId == item.id ? COLORS.blackMain : COLORS.whiteMain,
                            borderWidth: 1,


                        }}>
                        <Text style={{
                            ...FONTS.h3,
                            color: selectedCategoryId == item.id ? COLORS.whiteMain : COLORS.blackMain
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            ></FlatList>
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
            }}>HOME</Text>

            {renderSearch()}

            {showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />
            }
            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Food Categories */}
                        {renderFoodCategories()}
                        {/* Popular */}
                        {renderPopularSection()}
                        {/* Recommended */}
                        {renderRecommendedSection()}
                        {/* Menu type */}
                        {renderMenuType()}
                    </View>
                }
                renderItem={({ item, index }) => {
                    const indexFood = favFood.findIndex(food => food.id === item.id)
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 150,
                                marginHorizontal: SIZES.padding,
                                marginBottom: index == menuList.length - 1 ? 135 : SIZES.radius,
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
export default HomeScreen;
