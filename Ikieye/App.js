import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { StyleSheet, View, Text, Button } from 'react-native';

// import { styles } from './styles/styles';

// Screens
import HomeScreen from "./mainscreens/HomeScreen";
import GeneratorScreen from "./mainscreens/GeneratorScreen";
import LikesScreen from "./mainscreens/LikesScreen";
import JobboardScreen from "./mainscreens/JobboardScreen";

// Routes
// import HomeStack from "./routes/HomeStack";

// Importing navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";

const BottomTabs = createMaterialBottomTabNavigator();
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
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="Home" component={HomeScreen} />
          <BottomTabs.Screen name="Generator" component={GeneratorScreen} />
          <BottomTabs.Screen name="Likes" component={LikesScreen} />
          <BottomTabs.Screen name="Job board" component={JobboardScreen} />
        </BottomTabs.Navigator>
      </NavigationContainer>
    );
  }
}
