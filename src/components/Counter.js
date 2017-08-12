import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  container: {
    height: 190,
    width: 130,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 5,
    borderWidth: 2,
    borderRadius: 8,
  },
  counterText: {
    fontSize: 80,
    fontWeight: '800',
  }
});

export default ({ counter, increment, decrement }) => (
  <View style={styles.container}>
    <Text style={styles.counterText}>{counter}</Text>
    <TouchableOpacity onPress={increment} style={styles.button}>
      <Text>+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={decrement} style={styles.button}>
      <Text>-</Text>
    </TouchableOpacity>
  </View>
);
