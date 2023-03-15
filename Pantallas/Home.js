import { View, Text, ScrollView, Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import { Estilos } from './Estilos'

const Home = () => {
  return (
    <ScrollView>
      <View style={Estilos.container}>
        <Image source={require('../assets/logo-catando-ando-coffee.png')} style={Estilos.logo}/>
        <Text style={Estilos.Titulo}>CAFE DE ESPECIALIDAD MEXICANO</Text>
        <view style={Estilos.card}>
          <Image source={require('../assets/luis.png')}/>
          <Text style={Estilos.texto}>Seleccionamos y ofrecemos, para nuestros visitantes, 
          finos granos mexicanos de café de especialidad, cultivado en Veracruz y tostado artesanalmente 
          por el galardonado experto Luis Murillo.</Text>
        </view>
        <ScrollView horizontal>
        <TouchableOpacity style={Estilos.card}>
          <Image source={require('../assets/cafe1.png')}/>
          <Text>Café Garnica - Espinal Veracruz</Text>
          <Text>Desde $180.00 MXN </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Estilos.card}>
          <Image source={require('../assets/cafe2.png')}/>
          <Text>Café Garnica - Espinal Veracruz</Text>
          <Text>Desde $180.00 MXN </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Estilos.card}>
          <Image source={require('../assets/cafe-3.png')}/>
          <Text>Café Garnica - Espinal Veracruz</Text>
          <Text>Desde $180.00 MXN </Text>
        </TouchableOpacity>
        </ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignSelf:'stretch',padding:10}}>
          <Ionicons name='logo-facebook' size={25} color={colors.darkCoffee}/>
          <Ionicons name='logo-twitter' size={25} color={colors.darkCoffee}/>
          <Ionicons name='logo-instagram' size={25} color={colors.darkCoffee}/>
          <Ionicons name='logo-youtube' size={25} color={colors.darkCoffee}/>
      </View>
        <Text>Home</Text>
      </View>
    </ScrollView>
  )
}

export default Home