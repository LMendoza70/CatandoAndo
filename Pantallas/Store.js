import { View, Text, ActivityIndicator, FlatList,TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native'

const Store = () => {
  const nav=useNavigation()
  const [data,setdata]=useState(null)
  const [loadinn,setloading]=useState(false)

  useEffect(()=>{
    fetch('https://catandoando.vercel.app/api/productos')
    .then(res=>res.json())
    .then(dat=>{
      setdata(dat)
      setloading(true)
    })
    .catch(error=>{
      alert('Error al cargar los datos')
      setloading(false)
    })
  },[])

  const Forma=({_id,nombre,descripcion,precio})=>{
    return (
      <TouchableOpacity style={Estilos.cardf} onPress={()=>{nav.navigate('detalle',{id:_id})}}>
        <Text style={Estilos.cardTitle}>{nombre}</Text>
        <Image style={Estilos.cardImage} 
        source={require('../assets/cafe1.png')}/>
        <Text style={Estilos.cardDescription} numberOfLines={3} >{descripcion}</Text>
        <Text style={Estilos.cardAuthor}>{precio}</Text>
      </TouchableOpacity>
    )
  }

  const renderItem=({item})=>(<Forma _id={item._id} nombre={item.variedad.nombre} descripcion={item.variedad.descripcion} precio={item.precio}/>)

  if(loadinn==true){
    return(
      <View style={Estilos.container}>
        <Text style={Estilos.Titulo} >STORE</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=>item._id}
        style={Estilos.list}/>
      </View>
    )
  }else{
    return(
      <View style={Estilos.container}>
          <ActivityIndicator color={Colors.primary} size={'large'}/>
          <Text style={Estilos.Titulo}>Cargando...</Text>
      </View>
    )
  }
}

export default Store