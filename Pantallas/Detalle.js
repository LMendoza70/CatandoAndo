import { View, ScrollView, Image,Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Estilos } from './Estilos'

const Detalle = ({route}) => {
  const {id}=route.params;
  const [data,setdata]=useState({});
  const [loading,setloading]=useState(false);
  const [texto,setTexto]=useState('')
  useEffect(()=>{
    fetch('https://catandoando.vercel.app/api/productos/'+id)
    .then(res=>res.json())
    .then(dat=>{
      setdata(dat)
      setTexto( dat.variedad.descripcion+
        "\n°  "+dat.variedad.variedad+
        "\n°  "+dat.variedad.puntiacion +
        "\n°  "+dat.variedad.productor +
        "\n°  "+dat.variedad.finca+
        "\n°  "+dat.variedad.altura+
        "\n°  "+dat.variedad.preoceso+
        "\n°  "+dat.variedad.notas+
        "\n°  "+dat.presentacion.descripcion)
      setloading(true)
    })
    .catch(error=>console.error(error))
  },[])

  if(loading==true){
    return(
      <ScrollView>
        <View style={Estilos.container}>
          <Image source={require('../assets/logo-catando-ando-coffee.png')} style={Estilos.logo}/>
          <Image source={require('../assets/cafe1.png')} style={Estilos.foto} />
          <Text style={Estilos.TituloD}>{data.variedad.nombre}</Text>
          <Text>$ {data.precio} MXN</Text>
          <Text style={Estilos.TextoContenido}>{texto}</Text>
        </View>
      </ScrollView>
    )
  }else{
    return(
      <View style={Estilos.container}>
        <Text style={Estilos.Titulo}>CARGANDO...</Text>
        <ActivityIndicator size={'large'} color={Colors.primary}/>
      </View>
    )

  }
}

export default Detalle