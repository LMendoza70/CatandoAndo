import { View, ScrollView, Image,Text } from 'react-native'
import React from 'react'
import { Estilos } from './Estilos'

var texto="Café de especialidad tostado artesanalmente con finos granos selectos de Veracruz, México."+
"\n\t   °  Garnica Café de 84 puntos SCA"+
"\n\t   °  Rodolfo Jiménez"+
"\n\t   °  Espinal, Naolinco, Veracruz"+
"\n\t   °  1200 msnm"+
"\n\t   °  Proceso Lavado"+
"\n\t   °  Notas a naranja, piloncillo y chocolate"


const Detalle = () => {
  return (
    <ScrollView>
      <View style={Estilos.container}>
        <Image source={require('../assets/logo-catando-ando-coffee.png')} style={Estilos.logo}/>
        <Image source={require('../assets/cafe1.png')} style={Estilos.foto} />
        <Text style={Estilos.TituloD}>Café Garnica - Espinal Veracruz</Text>
        <Text>$ 180.00 MXN</Text>
        <Text style={Estilos.TextoContenido}>{texto}</Text>
      </View>
    </ScrollView>
  )
}

export default Detalle