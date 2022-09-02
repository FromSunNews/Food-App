import React from "react";
import {
    Text, StyleSheet, TouchableOpacity,
} from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions';
import colors from "../color";

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText} >{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: colors.black,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
        fontFamily: 'Lato-Regular',
    },
});
export default FormButton;
