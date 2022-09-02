import { View, Text, Image, ImageBackground } from 'react-native'
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
    TextButton,
    FormInputCardCheck,
    RadiusButton
} from '../components'

import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { utils } from '../utils'
const AddCard = ({ route }) => {
    const navigation = useNavigation();

    const [selectedCard, setSelectedCard] = React.useState(null)

    const [cardNumber, setCardNumber] = React.useState('')
    const [cardNumberError, setCardNumberError] = React.useState('')
    const [cardName, setCardName] = React.useState('')
    const [cardNameError, setCardNameError] = React.useState('')
    const [expiryDate, setExpiryDate] = React.useState('')
    const [expiryDateError, setExpiryDateError] = React.useState('')
    const [cvv, setCvv] = React.useState('')
    const [cvvError, setCvvError] = React.useState('')
    const [isRemember, setIsRemember] = React.useState(false)

    React.useEffect(() => {
        let { selectedCard } = route.params
        setSelectedCard(selectedCard)
    }, [])

    const renderHeader = () => {
        return (
            <Header
                title='ADD NEW CARD'
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
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    const renderCard = () => {
        return (
            <ImageBackground
                source={images.card}
                style={{
                    height: 200,
                    width: '100%',
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                }}
            >
                {/* Logo */}
                <Image
                    source={selectedCard?.icon}
                    resizeMode='contain'
                    style={{
                        position: 'absolute',
                        top: 20,
                        height: 20,
                        right: 40,
                        width: 80,

                    }}
                />
                <Image
                    source={images.chip}
                    style={{
                        height: 45,
                        width: '100%',
                        resizeMode: 'contain',
                        left: -125,
                        top: 75
                    }}

                />
                {/* Details */}

                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 0,
                        right: 0,
                        paddingHorizontal: SIZES.padding
                    }}
                >

                    <Text
                        style={{
                            color: COLORS.whiteMain,
                            ...FONTS.h3
                        }}
                    >{cardName}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginBottom: 10
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.whiteMain,
                                ...FONTS.body3
                            }}
                        >{cardNumber}</Text>
                        <Text
                            style={{
                                color: COLORS.whiteMain,
                                ...FONTS.body3
                            }}
                        >{expiryDate}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    const renderForm = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Card Number */}
                <FormInputCard
                    label='Card Number'
                    keyboardType='number-pad'
                    value={cardNumber}
                    onChange={(value) => {
                        setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
                        utils.validateInput(value, 19, setCardNumberError)
                    }}
                    maxLength={19}
                    errorMsg={cardNumberError}
                    appendComponent={
                        <FormInputCardCheck
                            value={cardNumber}
                            error={cardNumberError}
                        />
                    }
                />
                {/* Card Name */}
                <FormInputCard
                    label='Card Name'
                    value={cardName}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validateInput(value, 1, setCardNameError)
                        setCardName(value)
                    }}
                    errorMsg={cardNameError}
                    appendComponent={
                        <FormInputCardCheck
                            value={cardName}
                            error={cardNameError}
                        />
                    }
                />
                <View
                    style={{
                        marginTop: SIZES.radius,
                        flexDirection: 'row'

                    }}
                >
                    <FormInputCard
                        label='Expiry Date'
                        value={expiryDate}
                        placeholder='MM/YY'
                        maxLength={5}
                        containerStyle={{
                            flex: 1
                        }}
                        onChange={(value) => {
                            utils.validateInput(value, 5, setExpiryDateError)
                            setExpiryDate(value)
                        }}
                        appendComponent={
                            <FormInputCardCheck
                                value={expiryDate}
                                error={expiryDateError}
                            />
                        }
                    />

                    <FormInputCard
                        label='CVV'
                        value={cvv}
                        placeholder='MM/YY'
                        maxLength={3}
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius,
                        }}
                        onChange={(value) => {
                            utils.validateInput(value, 3, setCvvError)
                            setCvv(value)
                        }}
                        appendComponent={
                            <FormInputCardCheck
                                value={cvv}
                                error={cvvError}
                            />
                        }
                    />

                </View>
                <View
                    style={{
                        alignItems: 'flex-start',
                        marginTop: SIZES.padding
                    }}
                >

                    <RadiusButton
                        label='Remember This Card Details'
                        isSelected={isRemember}
                        onPress={() => {
                            setIsRemember(!isRemember)
                        }}

                    />
                </View>


            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding
                }}
            >
                <TextButton
                    disabled={!isEnableAddCard()}
                    label='Add Card'
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableAddCard() ? COLORS.yellowMain : COLORS.gray,
                        borderWidth: 1,
                        borderColor: COLORS.blackMain
                    }}
                    onPress={() => navigation.navigate('')}
                    labelStyle={{
                        color: COLORS.blackMain
                    }}
                    label2=''

                />
            </View>
        )
    }

    const isEnableAddCard = () => {
        return cardName != '' && cardName != '' && expiryDate != '' && cvv != ''
            && cardNumberError == '' && cardNumberError == '' && expiryDateError == ''
            && cvvError == ''
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
            {/* Body */}
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,

                }}
            >
                {/* Card */}
                {renderCard()}
                {/* Form */}
                {renderForm()}
            </KeyboardAwareScrollView>
            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default AddCard