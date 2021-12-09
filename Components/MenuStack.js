import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import Login from '../Views/Login'
import MenuDrawer from './MenuDrawer'
import RandomDrink from '../Views/RandomDrink'
import DrinkResult from '../Views/DrinkResult'
import CategoryResult from '../Views/CategoryResult'

const Stack = createStackNavigator();

export default function MenuStack() {
  return (
      
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="RandomDrink" component={RandomDrink} />
      <Stack.Screen name="DrinkResult" component={DrinkResult} />
      <Stack.Screen name="CategoryResult" component={CategoryResult} />
      <Stack.Screen name="MenuDrawer" component={MenuDrawer} options={{ headerShown: false }}/>
    </Stack.Navigator>
   
  );
}