import React, { useState } from "react";
import {
    View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native'
import FormButton from '../components/FormButton.js'
import FormInput from '../components/FormInput.js'
import SocialButton from '../components/SocialButton.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { windowHeight, windowWidth } from '../utils/Dimentions';
import { firebaseConfig } from "../firebase-config.js";


const SignupScreen = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    const handleSignUp = () => {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log(user.email);
                })
                .catch(error => alert(error.message))
        }
        else {
            alert('Please enter valid password');
        }

    }


    return (
        <View style={styles.container}>

            <Text style={styles.text} >Create an account</Text>
            <FormInput
                labelValue={email}
                placeholderText='Email'
                iconType='user'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(userEmail) => setEmail(userEmail)}
            />
            <FormInput
                labelValue={password}
                placeholderText='Password'
                iconType='lock'
                secureTextEntry={true}
                onChangeText={(userPassword) => setPassword(userPassword)}
            />

            <FormInput
                labelValue={confirmPassword}
                placeholderText='Confirm Password'
                iconType='lock'
                secureTextEntry={true}
                onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
            />
            <FormButton
                buttonTitle='Sign up'
                onPress={handleSignUp}
            />
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
                <TouchableOpacity onPress={() => alert('Terms of service clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of service</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <TouchableOpacity onPress={() => alert('Privacy Policy clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text>
                </TouchableOpacity>

            </View>

            <SocialButton
                buttonTitle='Sign Up with Facebook'
                btnType='facebook'
                color='#4867aa'
                backgroundColor='#e6eaf4'
                onPress={() => { }}
            />

            <SocialButton
                buttonTitle='Sign Up with Google'
                btnType='google'
                color='#de4d41'
                backgroundColor='#f5e7ea'
                onPress={() => { }}
            />


            <TouchableOpacity style={styles.navButton} onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Have an account? Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 25,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});
export default SignupScreen;
