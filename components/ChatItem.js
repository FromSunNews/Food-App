import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native';
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
    LineDivider
} from '../components'

import { useNavigation } from '@react-navigation/native';
const ChatItem = ({ chatRoom, index, onPress }) => {
    const navigation = useNavigation();
    const user = chatRoom.users[1]
    return (
        <View
            style={{
                marginBottom: index == 1 ? 140 : 0
            }}
        >
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius * 2,
                    alignItems: 'center'
                }}
                onPress={() => {
                    navigation.navigate('ChatRoom', { id: chatRoom.id })
                }}
            >
                <Image
                    source={{ uri: user.imageUri }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                    }}
                />
                {chatRoom.newMessage &&
                    <View
                        style={{
                            backgroundColor: COLORS.red,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            top: -15,
                            left: -10,
                            borderColor: COLORS.whiteMain,
                            borderWidth: 1

                        }}
                    >
                        <Text style={{ textAlign: 'center', color: 'white' }}>4</Text>
                    </View>}
                <View
                    style={{
                        flex: 1,
                        marginLeft: chatRoom.newMessage == null ? 20 : 0
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}

                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: COLORS.blackMain
                            }}
                        >{user.name}</Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                color: COLORS.blackMain
                            }}
                        >{chatRoom.lastMessage.createdAt}</Text>
                    </View>

                    <Text
                        numberOfLines={1}
                        style={{
                            ...FONTS.h4
                        }}
                    >{chatRoom.lastMessage.content}</Text>
                </View>
            </TouchableOpacity>
            <LineDivider
                lineStyle={{
                    marginTop: SIZES.radius,

                }}
            />
        </View>
    )
}

export default ChatItem