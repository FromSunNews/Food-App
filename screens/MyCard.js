import { View, Text } from 'react-native'
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
    Header,
    IconButton,
    TextButton,
    CartQuatityButton, CardItem
} from '../components'

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const MyCard = () => {
    const navigation = useNavigation();

    const [selectedCard, setSelectedCard] = React.useState(null)

    const renderHeader = () => {
        return (
            <Header
                title='MY CARD'
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

    const renderMyCard = () => {
        return (
            <View>
                {dummyData.myCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={item}
                            //isSelected will return true or false  
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: 'MyCard' })}


                        />
                    )
                })}
            </View>
        )
    }

    const renderAddNewCard = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{ ...FONTS.h3 }}
                >Add New Cards</Text>

                {dummyData.allCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`NewCard-${item.id}`}
                            item={item}
                            onPress={() => setSelectedCard({ ...item, key: 'AddNewCard' })}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `AddNewCard-${item.id}`}

                        />
                    )
                })}
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingBottom: 20,
                    paddingTop: 20,
                    paddingHorizontal: SIZES.padding,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,

                }}
            >
                <TextButton
                    disabled={selectedCard == null}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedCard == null ? COLORS.gray : COLORS.yellowMain,
                        borderWidth: 1,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 3,
                            height: 5,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4.65,

                        elevation: 3,
                    }}
                    label={selectedCard?.key == 'AddNewCard' ? 'Add New Card' : 'Place Your Order'}
                    label2=''
                    labelStyle={{
                        color: COLORS.blackMain
                    }}
                    onPress={() => {
                        if (selectedCard?.key == 'AddNewCard') {
                            navigation.navigate('AddCard', {
                                selectedCard: selectedCard
                            })
                        }
                        else {
                            navigation.navigate('Checkout', { selectedCard: selectedCard })
                        }
                    }}
                />
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.whiteMain,

            }}
        >
            {/* Header */}
            {renderHeader()}
            {/* Cards */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* My Card */}
                {renderMyCard()}

                {/* Add New Card */}
                {renderAddNewCard()}
            </ScrollView>
            {/* Footer */}
            {renderFooter()}

        </View>
    )
}

export default MyCard