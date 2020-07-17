import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { styles } from './styles/styles';

// 1.
import Feed from './screens/Feed';
import Detail from './screens/Detail';
import { HomeScreen } from "./screens/HomeScreen";
import GeneratorScreen from "./screens/GeneratorScreen";
import LikesScreen from "./screens/LikesScreen";
import JobboardScreen from "./screens/JobboardScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends Component {


  render() {
    createHomeStack = () =>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
      </Stack.Navigator>


    createBottomTabs = () => {
      return <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Home" component={HomeScreen} />
        <MaterialBottomTabs.Screen name="Likes" component={LikesScreen} />
        <MaterialBottomTabs.Screen name="Generator" component={GeneratorScreen} />
        <MaterialBottomTabs.Screen name="Job board" component={JobboardScreen} />
      </MaterialBottomTabs.Navigator>
    }

    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' children={createHomeStack} />
          <Drawer.Screen name='Generator' component={GeneratorScreen} />
          <Drawer.Screen name='Likes' component={LikesScreen} />
          <Drawer.Screen name='Jobboard' component={JobboardScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

// home, random gen, likes, jobs,
