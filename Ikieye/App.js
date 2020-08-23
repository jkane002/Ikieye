import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from "./mainscreens/HomeScreen";
import GeneratorScreen from "./mainscreens/GeneratorScreen";
import LikesScreen from "./mainscreens/LikesScreen";
import JobboardScreen from "./mainscreens/JobboardScreen";

// Subscreens
import WhatTheWorldNeeds from './subscreens/WhatTheWorldNeeds';
import WhatYouLove from "./subscreens/WhatYouLove";
import WhatYouAreGoodAt from "./subscreens/WhatYouAreGoodAt";
import WhatYouCanBePaidFor from "./subscreens/WhatYouCanBePaidFor";

// Importing navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const BottomTabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


export default class App extends Component {

  render() {
    function HomeScreenContainer({ navigation }) {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Ikieye" component={HomeScreen} />
          <Stack.Screen name="2" component={WhatYouLove} />
          <Stack.Screen name="3" component={WhatYouAreGoodAt} />
          <Stack.Screen name="4" component={WhatYouCanBePaidFor} />
        </Stack.Navigator>
      );
    }

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
