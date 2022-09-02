import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Pressable, Platform } from 'react-native'
import React from 'react'
import {
    COLORS,
    SIZES
} from '../constants';
import { Ionicons, SimpleLineIcons, Feather, FontAwesome } from '@expo/vector-icons';
const MassageInput = () => {
    const [message, setMessage] = React.useState('')
    return (
        <KeyboardAvoidingView
            style={{
                flexDirection: 'row',
                marginBottom: SIZES.radius,
                alignItems: 'center',
                backgroundColor: 'transparent'
            }}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={120}
        >

            <View
                style={{
                    backgroundColor: COLORS.lightGray1,
                    flex: 1,
                    paddingVertical: SIZES.base,
                    paddingHorizontal: 12,
                    borderRadius: 30,
                    flexDirection: 'row',
                    justifyContent: 'center'

                }}
            >
                <TouchableOpacity>
                    <SimpleLineIcons name="emotsmile" size={25} color={COLORS.darkGray2} />
                </TouchableOpacity>

                <TextInput
                    onChangeText={(item) => setMessage(item)}
                    style={{
                        flex: 1,
                        marginLeft: 5,
                        fontSize: 18
                    }}
                    value={message}
                    placeholder='New Message'
                />
                <TouchableOpacity
                    style={{
                        marginRight: 15,
                        marginLeft: 10
                    }}
                >
                    <Feather name="camera" size={25} color={COLORS.darkGray2} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="microphone" size={24} color={COLORS.darkGray2} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.blue,
                    height: 40,
                    width: 40,
                    borderRadius: 40,
                    marginLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => {
                    if (message == '') {
                        console.log('Add')
                    } else if (message != '') {
                        console.log(message)
                        setMessage('')
                    }
                }}
            >
                {message == '' ?
                    <Ionicons name="add" size={35} color="white" />
                    : <FontAwesome name='send' size={20} color="white" />
                }

            </TouchableOpacity>
        </KeyboardAvoidingView >
    )
}

export default MassageInput