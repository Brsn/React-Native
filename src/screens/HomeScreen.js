import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />

      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Images"
      />
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title="Go to Counter"
      />
      <Button
        onPress={() => props.navigation.navigate('Colors')}
        title="Go to Colors"
      />
      <Button
        onPress={() => props.navigation.navigate('Change')}
        title="Go to Color Square"
      />
      <Button
        onPress={() => props.navigation.navigate('Text Change')}
        title="Go to Text Change"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
