import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return <View>
        <Text>Enter Name:</Text>
        <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={newValue => setName(newValue)}
        />
        <Text>Enter Password</Text>
        <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={newValue => setPassword(newValue)}

        />
        <Text>Your name is: {name}</Text>

        {password.length < 6 ? <Text> Password must be larger than 6 characters</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;