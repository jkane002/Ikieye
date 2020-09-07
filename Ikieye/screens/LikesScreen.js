import React from "react";
import { Text, Button, } from 'react-native';
import { styles } from '../styles/styles';

import { ScreenContainer } from "react-native-screens";


export const LikesScreen = () => {
  return (
    <ScreenContainer style={styles.screencontainer}>
      <Text>Likes Screen</Text>
      <Button title="Drawer" onPress={() => alert("todo")} />
      <Button title="Sign Out" onPress={() => alert("todo")} />
    </ScreenContainer >
  )
};

