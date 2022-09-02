import React from "react";
import { Text, View, FlatList } from 'react-native';
import {
    COLORS,
    SIZES,
    dummyDataChatRoom
} from '../constants';
import {
    ChatItem
} from '../components'
import { useNavigation } from '@react-navigation/native';
function MessageScreen() {
    const navigation = useNavigation();
    const renderMessageList = () => {
        return (
            <FlatList
                data={dummyDataChatRoom}
                renderItem={({ item, index }) =>
                    <ChatItem
                        chatRoom={item}
                        index={index == dummyDataChatRoom.length - 1 ? 1 : 0}

                    />}
                showsVerticalScrollIndicator={false}
            />
        )

    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.whiteMain, paddingHorizontal: SIZES.padding }}>
            {/* Label */}
            <Text style={{
                marginTop: 10,
                fontSize: 24,
                fontWeight: 'bold',
                color: 'black',
            }}>MESSAGE</Text>
            {/* Message List */}
            {renderMessageList()}



        </View >
    );
}
export default MessageScreen;
