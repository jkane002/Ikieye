import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { styles } from '../styles/styles';
import { NavigationContainer } from '@react-navigation/native';
// import { Card } from "../components/Card";

import WhatYouLove from '../subscreens/WhatYouLove';

// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen() {

  onPressLove = () => {
    Alert.alert("Love");
  };
  onPressGood = () => {
    Alert.alert("Good");
  };
  onPressJobs = () => {
    Alert.alert("Jobs");
  };
  onPressWorld = () => {
    Alert.alert("World");
  };

  return (
    <SafeAreaView style={styles.cardcontainer}>
      <TouchableOpacity
        style={styles.card}
        onPress={this.onPressLove}
      >
        <View style={styles.cardinner}>
          <Text style={styles.title_cards}>
            What you love
            </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={this.onPressGood}
      >
        <View style={styles.cardinner}>
          <Text style={styles.title_cards}>
            What you are good at
            </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={this.onPressWorld}
      >
        <View style={styles.cardinner}>
          <Text style={styles.title_cards}>
            What the world needs
            </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={this.onPressJobs}
      >
        <View style={styles.cardinner}>
          <Text style={styles.title_cards}>
            What you can be paid for
            </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView >
  );

}
