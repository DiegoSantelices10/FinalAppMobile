import { View, Text, TouchableOpacity, Image } from 'react-native';
import s from '../styles/Style'
import React from 'react'
import DrawerMenu from './DrawerMenu';

export default function Menu(props) {

let token = props.params
    return (
      <View style={s.container}>
        <View style={s.bgContainer}>
          <TouchableOpacity>
            <View style={s.userContainer}>
              <Image style={s.userImagen}  />
            </View>
            <View style={s.userNombre}>
              <Text style={s.userTitulo}>Peliculas</Text>
            </View>
          </TouchableOpacity>
        </View>
        <DrawerMenu iconName='home' titleName='Home' navigation={() => props.navigation.navigate('Home', {params: token})}  />
        <DrawerMenu iconName='user' titleName='Category' navigation={() => props.navigation.navigate('Category')} />
       
      </View>
    )
  }
