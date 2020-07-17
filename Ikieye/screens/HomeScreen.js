import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> In HomeScreen</Text>
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
