import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Fontisto } from '@expo/vector-icons';
import { Colors, Estilos } from './Estilos'
import { useNavigation } from '@react-navigation/native';

const Splash = ({navigation}) => {
   
useEffect(()=>{
    let tmoid=setTimeout(() => {
        navigation.navigate('login')
    }, 1500);

    let onFocus=()=>{
        clearTimeout(tmoid)
        tmoid=setTimeout(()=>{
            navigation.navigate('login')
        },1500)
    }

    let unsubscribe = navigation.addListener('focus', onFocus)

    return () => {
        clearTimeout(timeoutId);
        unsubscribe();
    }
},[navigation])
//render
  return (
    <View style={Estilos.container} >
      <Text style={Estilos.textTitle}>Catando Ando</Text>
      <Fontisto name="coffeescript" color={Colors.primary} size={120}/>
    </View>
  )
}

export default Splash