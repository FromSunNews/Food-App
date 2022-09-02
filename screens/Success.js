import { View, Text, BackHandler, Image } from 'react-native'
import React from 'react'
import {
    TextButton
} from '../components'
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData
} from '../constants';
import { useNavigation } from '@react-navigation/native';
const Success = () => {
    const navigation = useNavigation();
    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
        return () => backHandler.remove();
    }, [])
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.whiteMain
        }}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.success}
                    style={{
                        width: 120,
                        height: 120,

                    }}
                    resizeMode='contain'
                />
                <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>Congratulation!</Text>
                <Text style={{ textAlign: 'center', marginTop: SIZES.base, color: COLORS.darkGray, ...FONTS.body3 }}>Payment was successfully made!</Text>

            </View>
            <TextButton
                label='Done'
                buttonContainerStyle={{
                    height: 60,
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.yellowMain,
                    borderWidth: 1,
                    borderColor: COLORS.blackMain
                }}
                label2=''
                labelStyle={{
                    color: COLORS.blackMain
                }}
                onPress={() => navigation.navigate('DeliveryStatus')}
            />
        </View>
    )
}

export default Success