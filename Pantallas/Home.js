import { View, Text, ScrollView, Image,TouchableOpacity, ActivityIndicator } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Colors, Estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native'
import { Linking } from 'react-native'

const Home = () => {
  const nav=useNavigation()
  const [datos,setdatos]=useState(null);
  const [loading,setloading]=useState(false);
  
  
  useEffect(()=>{
    fetch('https://catandoando.vercel.app/api/productos/home')
    .then(res=>res.json())
    .then(data=>{
      setdatos(data)
      setloading(true)
    })
    .catch(error=>{
      alert('No fue posible conectarse a la API')
      setloading(false)
    })
  },[])

  const Carrusel=()=>{
    return(
      <ScrollView horizontal>
            
            <TouchableOpacity style={Estilos.card} onPress={()=>{
              nav.navigate('detalle',{id:datos[0]._id})
            }}>
              <Image source={require('../assets/cafe1.png')} style={Estilos.foto}/>
              <Text>{datos[0].variedad.nombre}</Text>
              <Text>Desde ${datos[0].precio} MXN </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Estilos.card} onPress={()=>{
              nav.navigate('detalle',{id:datos[1]._id})
            }}>
              <Image source={require('../assets/cafe2.png')} style={Estilos.foto}/>
              <Text>{datos[1].variedad.nombre}</Text>
              <Text>Desde ${datos[1].precio} MXN </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Estilos.card} onPress={()=>{
              nav.navigate('detalle',{id:datos[2]._id})
            }}>
              <Image source={require('../assets/cafe-3.png')} style={Estilos.foto}/>
              <Text>{datos[2].variedad.nombre}</Text>
              <Text>Desde ${datos[2].precio} MXN </Text>  
            </TouchableOpacity>
          </ScrollView>
    )
  }
  
  if(loading==true){
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
        <Carrusel/>
        
        <View style={{flexDirection:'row',justifyContent:'space-around',alignSelf:'stretch',padding:10}}>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.facebook.com/catandoando")}>
            <Ionicons name='logo-facebook' size={25} color={Colors.primary}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='logo-twitter' size={25} color={Colors.primary}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='logo-instagram' size={25} color={Colors.primary}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='logo-youtube' size={25} color={Colors.primary}/>
          </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  )
  }else{
    return(
      <View style={Estilos.container}>
          <Text style={Estilos.Titulo}>Loading...</Text>
          <ActivityIndicator color={Colors.primary}/>
      </View>
    )
  }
}

export default Home