import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress={() => {
                //don't use this: counter++;
                //We don't modify the state directly
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                //dont use this: counter--;
                //We don't modify the state directly
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;
