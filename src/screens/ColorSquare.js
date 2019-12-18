import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ColorCounter from './components/ColorCounter';

const ColorSquare = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
        }
    };


    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <ColorCounter onIncrease={() => setColor('red', 1)}
                    onDecrease={() => setColor('red', -1)}
                    color="1px More Red" />
                <ColorCounter onIncrease={() => setColor('red', 10)}
                    onDecrease={() => setColor('red', -10)}
                    color="10px More Red" />
                <ColorCounter onIncrease={() => setColor('blue', 1)}
                    onDecrease={() => setColor('blue', - 1)}
                    color="1px More Blue" />
                <ColorCounter onIncrease={() => setColor('blue', 10)}
                    onDecrease={() => setColor('blue', - 10)}
                    color="10px More Blue" />
                <ColorCounter onIncrease={() => setColor('green', 1)}
                    onDecrease={() => setColor('green' - 1)}
                    color="1px More Green" />
                <ColorCounter onIncrease={() => setColor('green', 10)}
                    onDecrease={() => setColor('green' - 10)}
                    color="10px More Green" />
                <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default ColorSquare;
