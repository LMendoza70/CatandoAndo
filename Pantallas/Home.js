import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import { Colors, Estilos } from './Estilos'

const Home = () => {
  return (
    <ScrollView>
      <View style={Estilos.container}>
        <Image source={require('../assets/logo-catando-ando-coffee.png')} style={Estilos.logo}/>
        <Text style={Estilos.Titulo}>CAFE DE ESPECIALIDAD MEXICANO</Text>
        <View style={Estilos.card}>
          <Image source={require('../assets/luis.png')} style={Estilos.foto}/>
          <Text style={Estilos.texto}>Seleccionamos y ofrecemos, para nuestros visitantes, 
          finos granos mexicanos de café de especialidad, cultivado en Veracruz y tostado artesanalmente 
          por el galardonado experto Luis Murillo.</Text>
        </View>
        <ScrollView horizontal>
          
          <TouchableOpacity style={Estilos.card} >
            <Image source={require('../assets/cafe1.png')} style={Estilos.foto}/>
            <Text>Café Garnica - Espinal Veracruz</Text>
            <Text>Desde $180.00 MXN </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={Estilos.card}>
            <Image source={require('../assets/cafe2.png')} style={Estilos.foto}/>
            <Text>Café Garnica - Espinal Veracruz</Text>
            <Text>Desde $180.00 MXN </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={Estilos.card}>
            <Image source={require('../assets/cafe-3.png')} style={Estilos.foto}/>
            <Text>Café Garnica - Espinal Veracruz</Text>
            <Text>Desde $180.00 MXN </Text>  
          </TouchableOpacity>
        </ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignSelf:'stretch',padding:10}}>
          <Ionicons name='logo-facebook' size={25} color={Colors.primary}/>
          <Ionicons name='logo-twitter' size={25} color={Colors.primary}/>
          <Ionicons name='logo-instagram' size={25} color={Colors.primary}/>
          <Ionicons name='logo-youtube' size={25} color={Colors.primary}/>
      </View>
      </View>
    </ScrollView>
  )
}

export default Home