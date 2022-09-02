import { View, Text } from 'react-native'
import React from 'react'
import {
    COLORS
} from '../constants';



const Messages = ({ messages, containerStyle }) => {
    const myID = 'u1'
    const isMe = messages.user.id == myID
    return (
        <View
            style={{
                backgroundColor: isMe ? COLORS.gray2 : COLORS.blue,
                borderRadius: 10,
                marginLeft: isMe ? 'auto' : 0,
                marginRight: !isMe ? 'auto' : 0,
                maxWidth: '75%',
                ...containerStyle
            }}
        >
            <Text style={{
                justifyContent: 'center',
                fontSize: 18,
                color: isMe ? 'black' : COLORS.whiteMain,
                paddingBottom: 5,
                paddingTop: 5,
                paddingHorizontal: 10

            }}>{messages.content}</Text>
        </View>
    )
}

export default Messages