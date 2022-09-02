import { View, Text, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react'
import {
    Messages,
    MassageInput
} from '../components'
import {
    FONTS,
    COLORS,
    SIZES,
    images,
    dummyDataChat
} from '../constants';
import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ChatRoom = () => {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View
                style={{
                    backgroundColor: COLORS.blue,
                    height: 44,
                    width: '100%'
                }}
            ></View>
            <View
                style={{
                    backgroundColor: COLORS.blue,
                    height: 60,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    marginTop: -15
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginLeft: 10,
                        flexDirection: 'row', alignItems: 'center',
                        padding: 5,
                        flex: 1
                    }}
                >

                    <Image
                        source={images.profile}
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20
                        }}
                    ></Image>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            marginLeft: SIZES.base
                        }}
                    >ByProgrammers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingHorizontal: 10
                    }}>
                    <FontAwesome name="video-camera" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingHorizontal: 10
                    }}>
                    <Ionicons name="ios-call" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 5
                    }}
                >
                    <MaterialIcons name="more-vert" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: 'white'
                }}
            >

                <FlatList
                    data={dummyDataChat.messages}
                    renderItem={({ item, index }) =>
                        <Messages
                            messages={item}
                            containerStyle={{
                                marginTop: SIZES.radius,
                                marginBottom: 0 == index ? 30 : 0
                            }}
                        />}
                    showsVerticalScrollIndicator={false}
                    inverted
                />
                <MassageInput />
            </View>
        </>

    )
}

export default ChatRoom