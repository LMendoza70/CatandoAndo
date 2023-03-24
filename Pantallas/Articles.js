import { View, Text, ActivityIndicator, FlatList ,Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native'

const Articles = () => {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const nav=useNavigation()

  useEffect(()=>{
    fetch('https://catandoando.vercel.app/api/articles')
    .then(res=>res.json())
    .then(dat=>{
      setData(dat)
      setLoading(true)
    })
    .catch(error=>{
      setLoading(false)
      alert('Error al cargar datos')
    })
  },[])

  const Forma=({_id,titulo,body,autor})=>{
    return (
      <TouchableOpacity style={Estilos.cardf} onPress={()=>{nav.navigate('detalle',{id:_id})}}>
        <Text style={Estilos.cardTitle}>{titulo}</Text>
        <Image style={Estilos.cardImage} 
        source={require('../assets/autor1.jpg')}/>
        <Text style={Estilos.cardDescription} numberOfLines={3} >{body}</Text>
        <Text style={Estilos.cardAuthor}>{autor}</Text>
      </TouchableOpacity>
    )
  }

  const renderItem=({item})=>(<Forma _id={item._id} titulo={item.titulo} body={item.body} autor={item.autor}/>)

  if(loading==true)
    return (
      <View style={Estilos.container}>
        <Text style={Estilos.Titulo}>Articulos Publicados</Text>
        <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=>item._id}
        style={Estilos.list}/>
      </View>
    )
  else
      return(
        <View style={Estilos.container}>
          <Text style={Estilos.Titulo}>Cargando Datos...</Text>
          <ActivityIndicator color={Colors.primary} size='large'/>
        </View>
      )
}

export default Articles