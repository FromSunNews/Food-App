import React, { useEffect, useState } from "react";
import {
    View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native'
import FormButton from '../components/FormButton.js'
import FormInput from '../components/FormInput.js'
import SocialButton from '../components/SocialButton.js'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { windowHeight, windowWidth } from '../utils/Dimentions';
import { firebaseConfig } from "../firebase-config.js";
import colors from "../color.js";

const LoginScreen = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                props.navigation.navigate('DashBoard')
            }
        });
    }, [])

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/hello.png')}
                style={styles.logo} />
            <Text style={styles.text} >Grocery App</Text>
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
            <FormButton
                buttonTitle='Sign in'
                onPress={handleSignIn}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle='Sign In with Facebook'
                btnType='facebook'
                color='#4867aa'
                backgroundColor='#e6eaf4'
                onPress={() => { }}
            />

            <SocialButton
                buttonTitle='Sign In with Google'
                btnType='google'
                color='#de4d41'
                backgroundColor='#f5e7ea'
                onPress={() => { }}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: colors.white,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: colors.black,
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 25,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});
export default LoginScreen;
