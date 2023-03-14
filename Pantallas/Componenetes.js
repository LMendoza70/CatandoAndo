import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity,Text,TextInput,View } from 'react-native';
import { Colors, Estilos } from './Estilos';

const Caja=(props)=>{
    return(
        <View style={Estilos.cajaStyle}>
            <EvilIcons name={props.icono} size={35} color={Colors.primary} />
            <TextInput placeholder={props.text} onChangeText={props.funcion}/>
        </View>
    )
}
const CajaPass=(props)=>{
    return(
        <View style={Estilos.cajaStyle}>
            <EvilIcons name='lock' size={35} color={Colors.primary} />
            <TextInput placeholder='Password' secureTextEntry={true} onChangeText={props.funcion}/>
        </View>
    )
}

const Boton=props=>{
    return(
        <TouchableOpacity style={Estilos.boton} onPress={props.funcion}>
            <EvilIcons name={props.icono} size={35} color={Colors.text}/>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

const TextLink=props=>{
    return(
        <TouchableOpacity>
            <Text style={Estilos.textLink}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export {Caja, CajaPass,Boton,TextLink}