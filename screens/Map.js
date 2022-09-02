import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import { LinearGradient } from 'expo-linear-gradient'
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
    IconButton,
} from '../components'
import { utils } from '../utils';
import MapViewDirections from 'react-native-maps-directions';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const Map = () => {

    const navigation = useNavigation();
    const mapView = React.useRef()
    const [region, setRegion] = React.useState(null)
    const [toLoc, setToLoc] = React.useState(null)
    const [fromLoc, setFromLoc] = React.useState(null)
    const [angle, setAngle] = React.useState(null)
    const [isReady, setIsReady] = React.useState(false)
    const [duration, setDuration] = React.useState('')
    React.useEffect(() => {
        let initialRegion = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
        }
        setRegion(initialRegion)
        setToLoc(destination)
        setFromLoc(dummyData.fromLocs[1])
    }, [])
    const renderMap = () => {
        return (
            <MapView
                ref={mapView}
                style={{
                    flex: 1,

                }}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                {
                    fromLoc &&
                    <Marker
                        key={'FromLoc'}
                        coordinate={fromLoc}
                        tracksViewChanges={false}
                        icon={icons.navigator}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}
                    />
                }

                {
                    toLoc &&


                    <MapView.Marker
                        key={'ToLoc'}
                        coordinate={toLoc}
                        tracksViewChanges={false}
                        anchor={{ x: 0.5, y: 0.5 }}
                        icon={icons.location_pin}

                    >
                    </MapView.Marker>


                }

                <MapViewDirections
                    origin={fromLoc}
                    destination={toLoc}
                    apikey={constants.GOOGLE_MAP_API_KEY}
                    strokeWidth={5}
                    strokeColor={COLORS.yellowMain}
                    optimizeWaypoints={true}
                    onReady={result => {
                        setDuration(Math.ceil(result.duration))
                        if (!isReady) {
                            //Fit the map base on the route
                            mapView.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: SIZES.width * 0.1,
                                    bottom: 400,
                                    left: SIZES.width * 0.1,
                                    top: SIZES.height * 0.1
                                }
                            })
                        }
                        //Reposition the navigator
                        if (result.coordinates.length >= 2) {
                            let angle = utils.calculateAngle(result.coordinates)
                            setAngle(angle)
                        }
                        setIsReady(true)
                    }}
                />
            </MapView>
        )
    }

    const renderHeader = () => {
        return (
            <>

                <IconButton
                    icon={icons.back}
                    containerStyle={{
                        position: 'absolute',
                        top: SIZES.padding * 2,
                        left: SIZES.padding,
                        ...styles.buttonStyle
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray2
                    }}
                    onPress={() => navigation.goBack()}
                />
                <View
                    style={{
                        position: 'absolute',
                        top: SIZES.padding * 2,
                        right: SIZES.padding
                    }}
                >
                    <IconButton

                        icon={icons.globe}
                        containerStyle={{
                            ...styles.buttonStyle
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                    <IconButton

                        icon={icons.focus}
                        containerStyle={{ ...styles.buttonStyle, marginTop: SIZES.radius, }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />

                </View>
            </>


        )
    }
    const renderInfo = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                }}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[COLORS.transparent, COLORS.gray2]}
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 0,
                        right: 0,
                        height: Platform.OS == 'ios' ? 200 : 50
                    }}
                />

                {/* Info section */}

                <View
                    style={{
                        padding: SIZES.padding,
                        borderTopLeftRadius: SIZES.radius * 2,
                        borderTopRightRadius: SIZES.radius * 2,
                        backgroundColor: COLORS.whiteMain
                    }}
                >
                    {/* Delivery Time */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={icons.clock}
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: COLORS.blackMain
                            }}
                        />
                        <View
                            style={{
                                marginLeft: SIZES.padding
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h3
                                }}
                            >Your Delivery Time</Text>
                            <Text
                                style={{
                                    ...FONTS.body5,
                                    color: COLORS.red,
                                    fontWeight: 'bold'
                                }}
                            >8 Minutes</Text>
                        </View>
                    </View>
                    {/* Your address */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center', marginTop: SIZES.radius
                        }}
                    >
                        <Image
                            source={icons.location}
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: COLORS.blackMain
                            }}
                        />
                        <View
                            style={{
                                marginLeft: SIZES.padding,
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h3
                                }}
                            >Your address</Text>
                            <Text
                                style={{
                                    ...FONTS.body5,
                                    color: COLORS.red,
                                    fontWeight: 'bold'
                                }}
                            >88, Jln Padunggam, Kuching</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 70,
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius,
                            paddingHorizontal: SIZES.padding,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.yellowMain,
                            borderWidth: 1,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,

                            elevation: 8,
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 20,
                                borderWidth: 1,
                                borderColor: COLORS.darkGray
                            }}
                        ><Image
                                source={images.da}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,

                                }}
                            /></View>

                        <View
                            style={{
                                flex: 1,
                                marginLeft: SIZES.radius,

                            }}
                        >
                            <Text style={{
                                color: COLORS.blackMain,
                                ...FONTS.h3
                            }}>Hòa Shipper</Text>
                            <Text style={{
                                color: COLORS.blackMain,
                                ...FONTS.body4
                            }}>Delivery Man</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                        >
                            <Ionicons name='chatbubbles' size={20} color={COLORS.blue} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonStyle, { marginLeft: SIZES.base }]}
                        >
                            <Image
                                source={icons.call}
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.green
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <View
            style={{ flex: 1 }}
        >
            {/* Map */}
            {renderMap()}
            {/* Header */}
            {renderHeader()}
            {/* Footer / info */}
            {renderInfo()}
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.blackMain,
        backgroundColor: COLORS.whiteMain
    }
});
export default Map