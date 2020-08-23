import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { styles } from '../styles/styles';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Card } from "../components/Card";
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';


// import WhatTheWorldNeeds from '../subscreens/WhatTheWorldNeeds';
import WhatYouLove from "../subscreens/WhatYouLove";
// import WhatYouAreGoodAt from "../subscreens/WhatYouAreGoodAt";
// import WhatYouCanBePaidFor from "../subscreens/WhatYouCanBePaidFor";

// import { HomeScreen_Stack } from "../stacks/HomeStack";

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.cardcontainer}>
      <Card name="What you love" pressComp={onPressLove} />
      <Card name="What you are good at" pressComp={onPressGood} />
      <Card name="What the world needs" pressComp={onPressWorld} />
      <Card name="What you can be paid for" pressComp={onPressJobs} />
    </SafeAreaView >
  );

}
