import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from '../styles/styles';
import { Card } from "../components/Card";


// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.cardcontainer}>
        <Card style={styles.cardouter} >
          <Text style={styles.title_cards}>What you love</Text>
        </Card>
        <Card style={styles.cardouter}>
          <Text style={styles.title_cards}>What you are good at</Text>
        </Card>
        <Card style={styles.cardouter}>
          <Text style={styles.title_cards}>What the world needs</Text>
        </Card>
        <Card style={styles.cardouter}>
          <Text style={styles.title_cards}>What you can be paid for</Text>
        </Card>
      </SafeAreaView >
    );
  }
}
