import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Navigator } from 'react-native';

export default class JobboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>In Job Board Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// home, random gen, likes, jobs,
