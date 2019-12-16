import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const name = "Bronson";

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen;