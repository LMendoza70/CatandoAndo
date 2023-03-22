import { View, Text } from 'react-native'
import { useState } from 'react' 
import { Colors, Estilos } from './Estilos'
import { Fontisto } from '@expo/vector-icons';
import { Boton, Caja, CajaPass, TextLink } from './Componenetes';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    //funcionalidad
    const nav=useNavigation()
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('')
    //const [data, setdata] = useState(null)
    //const [clik, setclik] = useState(false)

    const loguea=()=>{
        //funcion se ejecuata en el onclick del boton
        fetch('https://catandoando.vercel.app/api/users/email/'+user)
        .then(response=>response.json())
        .then(data=>{
            if(data==null){
                alert('Usuario inexistente...')
            }else if(data.password==pass){
                nav.navigate('homei')
            }else{
                alert('password incorrecto')
            }
        })
    }

    //Renderizado
  return (
    <View style={Estilos.container}>
        <Text style={Estilos.textTitle}>Catando Ando</Text>
        <Fontisto name="coffeescript" size={85} color={Colors.primary}/>
        <Caja icono='user' text='Username' funcion={(value)=>setuser(value)}/>
        <CajaPass funcion={(value)=>setpass(value)}/>
        <Boton icono='check' text='Loguin' funcion={loguea}/>
        <TextLink text='¿Perdiste tu contraseña?'/>
        <TextLink text='¿no tienes cuenta? Registrate'/>
    </View>
  )
}

export default Login