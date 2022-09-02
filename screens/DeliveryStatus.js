import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData,
    constants
} from '../constants';
import {
    Header,
    IconButton,
    TextButton,
    LineDivider,
    TextIconButton
} from '../components'

import { useNavigation } from '@react-navigation/native';
const DeliveryStatus = () => {

    const navigation = useNavigation();

    const [currentStep, setCurrentStep] = React.useState(2);
    const renderHeader = () => {
        return (
            <Header
                title='DELIVERY STATUS'
                containerStyle={{
                    height: 50,
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

    const renderInfo = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,

                }}
            >
                <Text style={{
                    textAlign: 'center',
                    color: COLORS.gray,
                    ...FONTS.body4
                }}>Estimated Delivery</Text>
                <Text style={{
                    textAlign: 'center',
                    ...FONTS.h2
                }}>21 Sept 2021/ 12:30 PM</Text>
            </View>
        )
    }

    const renderTrackOrder = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    backgroundColor: COLORS.white2
                }}
            >
                {/* Track Order */}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        paddingHorizontal: SIZES.padding

                    }}
                >
                    <Text style={{
                        ...FONTS.h3
                    }}>Track Order</Text>
                    <Text style={{
                        color: COLORS.gray,
                        ...FONTS.body3
                    }}>DF043GH2940</Text>
                </View>
                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray2,
                        paddingHorizontal: SIZES.padding
                    }}
                />
                {/* Status */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding,

                    }}
                >
                    {constants.track_order_status.map((item, index) => {
                        return (
                            <View
                                key={`StatusList-${index}`}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginVertical: -5
                                    }}
                                >
                                    <Image
                                        source={icons.check_circle}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor: index <= currentStep ? COLORS.yellowMain : COLORS.lightGray1

                                        }}
                                    />
                                    <View
                                        style={{
                                            marginLeft: SIZES.radius,

                                        }}
                                    >
                                        <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
                                        <Text style={{ ...FONTS.body4, color: COLORS.gray }}>{item.sub_title}</Text>
                                    </View>
                                </View>
                                {index < constants.track_order_status.length - 1 &&
                                    <View>
                                        {index < currentStep &&
                                            <View
                                                style={{
                                                    height: 50,
                                                    width: 3,
                                                    marginLeft: 18,
                                                    backgroundColor: COLORS.yellowMain,
                                                    zIndex: -1
                                                }}
                                            ></View>
                                        }
                                        {index >= currentStep &&
                                            <Image
                                                source={icons.dotted_line}
                                                style={{
                                                    width: 4,
                                                    height: 50,
                                                    marginLeft: 18,
                                                }}
                                            />
                                        }
                                    </View>
                                }
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                {currentStep < constants.track_order_status.length - 1 &&
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 55
                        }}
                    >
                        {/* Cancel Button */}
                        <TextButton
                            buttonContainerStyle={{
                                width: '40%',
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.lightGray2,

                            }}
                            label='Cancel'
                            labelStyle={{
                                color: COLORS.blackMain,

                            }}
                            label2=''
                            onPress={() => navigation.navigate('DashBoard')}
                        />
                        {/* Map View */}
                        <TextIconButton
                            containerStyle={{
                                flex: 1,
                                marginLeft: SIZES.radius,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.yellowMain,
                                borderWidth: 1,
                                borderColor: COLORS.blackMain
                            }}
                            label='Map View'
                            labelStyle={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                            icon={icons.map}
                            iconPos='LEFT'
                            iconStyle={{
                                width: 25,
                                height: 25,
                                marginRight: SIZES.base,
                                tintColor: COLORS.white
                            }}
                            onPress={() => navigation.navigate('Map')}
                        />
                    </View>
                }
                {currentStep == constants.track_order_status.length - 1 &&
                    <TextButton
                        onPress={() => navigation.navigate('FoodDetail')}
                        buttonContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.base,
                            backgroundColor: COLORS.yellowMain,
                            borderWidth: 1,
                            borderColor: COLORS.blackMain
                        }}
                        label='Done'
                        label2=''
                        labelStyle={{
                            color: COLORS.blackMain
                        }}
                    />

                }
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.whiteMain
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Info */}
            {renderInfo()}

            {/* Track Order */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderTrackOrder()}
            </ScrollView>

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus