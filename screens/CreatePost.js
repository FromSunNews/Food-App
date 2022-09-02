import { View, Text, Image, ScrollView, FlatList } from 'react-native';
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
    TextButton
} from '../components'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
function CreatePost() {
    const navigation = useNavigation();
    const [route, setRoute] = React.useState('History')
    const renderHeader = () => {
        return (
            <Header
                title='MY ORDERS'
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
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
                    <Image
                        source={images.profile}
                        style={{
                            height: 45,
                            width: 45,
                            borderRadius: SIZES.radius,
                        }}
                    />
                }
            />
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.whiteMain }}>
            {/* Header */}
            {renderHeader()}
            {/* Button Route */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: SIZES.padding,
                    marginBottom: 20
                }}
            >
                <TextButton
                    label='History'
                    buttonContainerStyle={{
                        height: 50,
                        width: '45%',
                        backgroundColor: route == 'History' ? COLORS.yellowMain : COLORS.lightGray2,
                        borderRadius: SIZES.radius,
                        borderWidth: 1,
                        borderColor: COLORS.blackMain
                    }}
                    label2=''
                    onPress={() => setRoute('History')}
                />
                <TextButton
                    label='Upcoming'
                    buttonContainerStyle={{
                        height: 50,
                        width: '45%',
                        backgroundColor: route == 'Upcoming' ? COLORS.yellowMain : COLORS.lightGray1,
                        borderRadius: SIZES.radius,
                        borderWidth: 1,
                        borderColor: COLORS.blackMain,
                    }}
                    label2=''
                    onPress={() => setRoute('Upcoming')}
                />
            </View>
            {/* Body */}
            {
                route == 'History' ?
                    <FlatList
                        data={dummyData.listOrder}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <View
                                style={{
                                    marginHorizontal: SIZES.padding,
                                    paddingHorizontal: SIZES.padding,
                                    backgroundColor: COLORS.lightGray2,
                                    height: 150,
                                    borderRadius: SIZES.radius,
                                    justifyContent: 'center',
                                    marginBottom: 20,
                                }}
                            >
                                {/* Details */}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={item.brand_img}
                                        style={{
                                            height: 60,
                                            width: 60,
                                            borderRadius: SIZES.radius,
                                            backgroundColor: COLORS.whiteMain,
                                            borderWidth: 1,
                                            borderColor: COLORS.blackMain

                                        }}
                                    />
                                    <View
                                        style={{
                                            flex: 1,
                                            marginLeft: 10
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.brand}</Text>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.red }}>${item.price}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.gray }}>{item.time_order}</Text>

                                            <Entypo name="dot-single" size={20} color='gray' />

                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.gray }}>{item.number_item}{item.number_item > 1 ? ' Items' : ' Item'} </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginLeft: -10
                                            }}
                                        >

                                            <Entypo name="dot-single" size={25} color={item.status == 'Order Delivered' ? COLORS.green : COLORS.red} />

                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: item.status == 'Order Delivered' ? COLORS.green : COLORS.red }}>{item.status}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* Button */}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <TextButton
                                        label='Re-Order'
                                        buttonContainerStyle={{
                                            height: 40,
                                            width: '47%',
                                            backgroundColor: COLORS.yellowMain,
                                            borderRadius: SIZES.radius,
                                            borderWidth: 1,
                                            borderColor: COLORS.blackMain
                                        }}
                                        label2=''
                                    />
                                    <TextButton
                                        label='Rate'
                                        buttonContainerStyle={{
                                            height: 40,
                                            width: '47%',
                                            backgroundColor: COLORS.lightGray1,
                                            borderRadius: SIZES.radius
                                        }}
                                        label2=''
                                    />
                                </View>
                            </View>
                        }
                    /> :
                    <FlatList
                        data={dummyData.listUpcoming}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <View
                                style={{
                                    marginHorizontal: SIZES.padding,
                                    paddingHorizontal: SIZES.padding,
                                    backgroundColor: COLORS.lightGray2,
                                    height: 150,
                                    borderRadius: SIZES.radius,
                                    justifyContent: 'center',
                                    marginBottom: 20,
                                }}
                            >
                                {/* Details */}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={item.brand_img}
                                        style={{
                                            height: 60,
                                            width: 60,
                                            borderRadius: SIZES.radius,
                                            backgroundColor: COLORS.whiteMain,
                                            borderWidth: 1,
                                            borderColor: COLORS.blackMain

                                        }}
                                    />
                                    <View
                                        style={{
                                            flex: 1,
                                            marginLeft: 10
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.brand}</Text>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.red }}>${item.price}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.gray }}>{item.time_order}</Text>

                                            <Entypo name="dot-single" size={20} color='gray' />

                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.gray }}>{item.number_item}{item.number_item > 1 ? ' Items' : ' Item'} </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginLeft: -10
                                            }}
                                        >

                                            <Entypo name="dot-single" size={25} color={COLORS.orange} />

                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.orange }}>{item.status}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* Button */}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <TextButton
                                        label='Tracking Order'
                                        buttonContainerStyle={{
                                            height: 40,
                                            width: '47%',
                                            backgroundColor: COLORS.yellowMain,
                                            borderRadius: SIZES.radius,
                                            borderWidth: 1,
                                            borderColor: COLORS.blackMain
                                        }}
                                        label2=''
                                    />
                                    <TextButton
                                        label='Cancel'
                                        buttonContainerStyle={{
                                            height: 40,
                                            width: '47%',
                                            backgroundColor: COLORS.lightGray1,
                                            borderRadius: SIZES.radius
                                        }}
                                        label2=''
                                    />
                                </View>
                            </View>
                        }
                    />
            }

        </View >
    );
}
export default CreatePost;