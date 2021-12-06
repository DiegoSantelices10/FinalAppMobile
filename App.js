import React from 'react';
import MyStack from './Components/MenuStack'
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { navigationRef } from './Components/RootNavigation';

export default function App() {
  return (
  <NavigationContainer ref={navigationRef}>
    <MyStack/>
  </NavigationContainer>
  );
}


