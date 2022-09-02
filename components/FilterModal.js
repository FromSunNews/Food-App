import { View, Text, TouchableWithoutFeedback, Image, Animated, ScrollView, Modal, StyleSheet } from 'react-native';
import React from 'react';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';
import {
    IconButton,
    TwoPointSlider,
    TextButton,
    TextIconButton
} from '../components'
import { render } from 'react-dom';
const FilterModal = ({ isVisible, onClose }) => {
    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current

    const [deliveryTime, setDeliveryTime] = React.useState('')
    const [ratings, setRatings] = React.useState('')
    const [tags, setTags] = React.useState('')

    const [showFilterModal, setShowFilterModal] = React.useState(isVisible)
    React.useEffect(() => {
        //!showFilterModal => showFilterModal == false
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,

            }).start()
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,

            }).start(() => onClose())
        }
    }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 680]
    })

    const Section = ({ containerStyle, title, children }) => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    ...containerStyle
                }}>
                <Text style={{
                    ...FONTS.h3
                }}>{title}</Text>

                {children}
            </View>
        )
    }
    const renderDistance = () => {
        return (
            <Section
                title='Distance'
            >
                <View style={{
                    alignItems: 'center',

                }}>
                    <TwoPointSlider
                        values={[3, 10]}
                        min={1}
                        max={20}
                        postfix='km'
                        onValuesChange={(values) => console.log(values)}
                    />
                </View>
            </Section>
        )
    }
    const renderDeliveryTime = () => {
        return (
            <Section
                title='Delivery Time'
                containerStyle={{
                    marginTop: 35
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: SIZES.radius
                }}>
                    {constants.delivery_time.map((item, index) => {
                        return (
                            <TextButton
                                key={`delivery_time-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color: item.id == deliveryTime ? COLORS.whiteMain : COLORS.gray,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle={{
                                    width: '30%',
                                    height: 50,
                                    margin: 5,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    backgroundColor: item.id == deliveryTime ? COLORS.blackMain : COLORS.lightGray2
                                }}
                                onPress={() => setDeliveryTime(item.id)}
                                label2=''
                            ></TextButton>
                        )
                    })}
                </View>
            </Section>
        )
    }
    const renderPricingRange = () => {
        return (
            <Section
                title='Pricing Range'
            >
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <TwoPointSlider
                        values={[10, 50]}
                        min={1}
                        max={100}
                        prefix='$'
                        postfix=''
                        onValuesChange={(values) => console.log(values)}
                    ></TwoPointSlider>
                </View>
            </Section>
        )
    }
    const renderRatings = () => {
        return (
            <Section
                title='Ratings'
                containerStyle={{
                    marginTop: 35
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    {constants.ratings.map((item, index) => {
                        return (
                            <TextIconButton
                                key={`Ratings-${index}`}
                                containerStyle={{
                                    flex: 1,
                                    height: 50,
                                    margin: 5,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    backgroundColor: item.id == ratings ? COLORS.blackMain : COLORS.lightGray2

                                }}
                                label={item.label}
                                labelStyle={{
                                    color: item.id == ratings ? COLORS.whiteMain : COLORS.gray
                                }}
                                icon={icons.star}
                                iconStyle={{
                                    tintColor: item.id == ratings ? COLORS.whiteMain : COLORS.gray
                                }}
                                onPress={() => setRatings(item.id)}
                            ></TextIconButton>
                        )
                    })}
                </View>
            </Section>
        )
    }
    const renderTags = () => {
        return (
            <Section
                title='Tags'
            >
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    {constants.tags.map((item, index) => {
                        return (
                            <TextButton
                                key={`Tags-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color: item.id == tags ? COLORS.whiteMain : COLORS.gray,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle={{
                                    height: 50,
                                    margin: 5,
                                    paddingHorizontal: SIZES.padding,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    backgroundColor: item.id == tags ? COLORS.blackMain : COLORS.lightGray2
                                }}
                                onPress={() => setTags(item.id)}
                                label2=''
                            />
                        )
                    })}
                </View>
            </Section>
        )
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={{
                flex: 1,
                backgroundColor: COLORS.transparentBlack7
            }}>
                {/* Transparent background */}
                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModal(false)}
                >
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}></View>

                </TouchableWithoutFeedback>
                <Animated.View style={{
                    position: 'absolute',
                    left: 0,
                    top: modalY,
                    width: '100%',
                    height: '100%',
                    padding: SIZES.padding,
                    borderTopRightRadius: SIZES.padding,
                    borderTopLeftRadius: SIZES.padding,
                    backgroundColor: COLORS.whiteMain,

                }}>
                    {/* Headed */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            flex: 1,
                            ...FONTS.h3,
                            fontSize: 18,
                        }}>Filter Your Search</Text>
                        <IconButton
                            containerStyle={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: COLORS.blackMain,
                                height: 35,
                                width: 35,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.blackMain,
                                height: 25,
                                width: 25
                            }}
                            onPress={() => setShowFilterModal(false)}
                        ></IconButton>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 250
                        }}
                    >
                        {/* Distance */}
                        {renderDistance()}

                        {/* Delivery Time */}
                        {renderDeliveryTime()}

                        {/* Pricing Range */}
                        {renderPricingRange()}

                        {/* Ratings */}
                        {renderRatings()}

                        {/* Tags */}
                        {renderTags()}


                    </ScrollView>
                    {/* Button Apply */}
                    <View style={{
                        position: 'absolute',
                        bottom: 135,
                        left: 0,
                        right: 0,
                        height: 110,
                        paddingVertical: SIZES.radius,

                        backgroundColor: COLORS.lightGray2,
                        justifyContent: 'center',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,

                        elevation: 6,
                        borderRadius: 30


                    }}>
                        <TextButton
                            label='Apply Filter'
                            buttonContainerStyle={{
                                marginHorizontal: SIZES.padding,
                                height: 50,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.yellowMain,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,

                                elevation: 4,
                            }}
                            labelStyle={{
                                color: COLORS.blackMain
                            }}
                            onPress={() => console.log('Apply Filter')}
                            label2=''
                        ></TextButton>
                    </View>
                </Animated.View>
            </View>

        </Modal>
    );
};

export default FilterModal;
