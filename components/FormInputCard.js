import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData
} from '../constants';

const FormInputCard = ({ containerStyle, inputContainerStyle, label, placeholder, inputStyle,
    value = '', prependComponent, appendComponent, onChange, secureTextEntry, keyboardType = 'default',
    autoCompleteType = 'off', autoCapitalize = 'none', errorMsg = '', maxLength }) => {
    return (
        <View
            style={{
                ...containerStyle
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text style={{ flex: 1, color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    height: SIZES.height > 800 ? 55 : 45,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.height > 800 ? SIZES.base : 0,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                    ...inputContainerStyle
                }}

            >
                {
                    prependComponent
                }
                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoComplete={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}

                >

                </TextInput>
                {
                    appendComponent
                }
            </View>
        </View>
    )
}

export default FormInputCard