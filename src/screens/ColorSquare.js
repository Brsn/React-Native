import React, { useReducer } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number};
    //action === { type: 'change_red', || 'change_blue', || 'change_green', payload: 10)

    console.log(state.red);
    console.log(state.green);
    console.log(state.blue);
    switch (action.type) {
        case 'change_red':
            if (state.red + action.payload > 255 || state.red + action.payload < 0) {
                return state;
            }
            return { ...state, red: state.red + action.payload };
        //updates the state object without changing it
        case 'change_green':
            if (state.green + action.payload > 255 || state.green + action.payload < 0) {
                return state;
            }
            return { ...state, green: state.green + action.payload };
        case 'change_blue':
            if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
                return state;
            }
            return { ...state, blue: state.blue + action.payload };
        default:
            return state;


    }
}
const ColorSquare = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    //here were destructoring
    //we could instead use state.red, ect...

    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <ColorCounter onIncrease={() => dispatch({ type: 'change_red', payload: 10 })}
                    onDecrease={() => dispatch({ type: 'change_red', payload: -10 })}
                    color="Red" />

                <ColorCounter onIncrease={() => dispatch({ type: 'change_blue', payload: 10 })}
                    onDecrease={() => dispatch({ type: 'change_blue', payload: -10 })}
                    color="Blue" />
                <ColorCounter onIncrease={() => dispatch({ type: 'change_green', payload: 10 })}
                    onDecrease={() => dispatch({ type: 'change_green', payload: -10 })}
                    color="Green" />
                <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default ColorSquare;
