import React from "react";
import { Text, StyleSheet, View } from 'react-native';


function MyWalletScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
            <Text>My Wallet Screen!</Text>
        </View>
    );
}
export default MyWalletScreen;