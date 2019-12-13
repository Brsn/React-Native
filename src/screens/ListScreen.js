import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Person #1', age: 25 },
        { name: 'Person #2', age: 40 },
        { name: 'Person #3', age: 99 },
        { name: 'Person #4', age: 27 },
        { name: 'Person #5', age: 33 },
        { name: 'Person #6', age: 17 }
    ];
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} Age: {item.age}</Text>
            }}
        />
    )

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;