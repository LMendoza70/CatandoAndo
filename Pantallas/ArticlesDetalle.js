import { View, Text ,ActivityIndicator, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Estilos } from './Estilos'

const ArticlesDetalle = ({route}) => {
    const {id}=route.params
    const [data,setdata]=useState(null)
    const [loading,setloading]=useState(false)

    useEffect(()=>{
        fetch('https://catandoando.vercel.app/api/articles/'+id)
        .then(res=>res.json())
        .then(dat=>{
            setdata(dat)
            setloading(true)
        }).catch(error=>alert('Error al cargar los datos'))        
    },[])

    const separa=texto=>texto.replace(/\./g, '.\n\n')

    if(loading==true){
        return(
            <View style={Estilos.container}>
                <Text style={Estilos.Titulo}>{data.titulo}</Text>
                <ScrollView>
                    <Text style={Estilos.TextoContenido}>{separa(data.body)}</Text>
                </ScrollView>
                <Text style={Estilos.cardAuthor}>{data.autor}</Text>
            </View>
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

export default ArticlesDetalle