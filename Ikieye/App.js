import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { styles } from './styles/styles';

// Screens
import HomeScreen from "./screens/HomeScreen";
import GeneratorScreen from "./screens/GeneratorScreen";
import LikesScreen from "./screens/LikesScreen";
import JobboardScreen from "./screens/JobboardScreen";

// Importing navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";

const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    // createHomeDrawer = () => {
    //   return <Drawer.Navigator>
    //     <Drawer.Screen name='Home' children={createHomeStack} />
    //     <Drawer.Screen name='Generator' component={GeneratorScreen} />
    //     <Drawer.Screen name='Likes' component={LikesScreen} />
    //     <Drawer.Screen name='Jobboard' component={JobboardScreen} />
    //   </Drawer.Navigator>
    // }

    return (
      <NavigationContainer>
        <MaterialBottomTabs.Navigator>
          <MaterialBottomTabs.Screen name="Home" component={HomeScreen} />
          <MaterialBottomTabs.Screen name="Generator" component={GeneratorScreen} />
          <MaterialBottomTabs.Screen name="Likes" component={LikesScreen} />
          <MaterialBottomTabs.Screen name="Job board" component={JobboardScreen} />
        </MaterialBottomTabs.Navigator>
      </NavigationContainer>
    );
  }
}
