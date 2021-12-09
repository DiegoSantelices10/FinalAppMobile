import React, {useState, useEffect} from "react";
import Home from "../Views/Home";
import Category from "../Views/Category";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "./Menu";


const Drawer = createDrawerNavigator();

export default function MenuDrawer(props) {
  
  let token = props.route.params.params.accessToken
  return (
      <Drawer.Navigator
        initialRouteName="home"
        drawerContent={(props) => <Menu {...props} params={token} />}
      >
        <Drawer.Screen name="Home" component={Home} {...props}  />
        <Drawer.Screen name="Category" component={Category} />
      </Drawer.Navigator>
    
  );
}
