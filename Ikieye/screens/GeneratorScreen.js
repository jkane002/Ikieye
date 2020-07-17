import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Navigator} from 'react-native';

export default function GeneratorScreen() {
  return (
    <View style={styles.container}>
      <Text> GeneratorScreen</Text>
    </View>
  );
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
