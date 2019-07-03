import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { primaryGradientArray, lightWhite } from './app/utils/colors';

export default class Main extends React.Component {
    render() {
        return (
            <LinearGradient colors={primaryGradientArray} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text>Open up App.js to start working on your app!</Text>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: lightWhite
    }
});