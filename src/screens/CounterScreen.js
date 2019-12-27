
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    //state a count object {count: number}
    //action = how to change state {type: 'increment || 'decrement'}

    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    // const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment' })
                //don't use this: counter++;
                //We don't modify the state directly
                //setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrement' })
                //dont use this: counter--;
                //We don't modify the state directly
                // setCounter(counter - 1);
            }} />
            <Text>Current Count:{state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;
