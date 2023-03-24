import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Articles from './Pantallas/Articles';
import ArticlesDetalle from './Pantallas/ArticlesDetalle';
import Detalle from './Pantallas/Detalle';
import { Colors } from './Pantallas/Estilos';
import Home from './Pantallas/Home';
import Login from './Pantallas/Login';
import Recuperar from './Pantallas/Recuperar';
import Registro from './Pantallas/Registro';
import Splash from './Pantallas/Splash';
import Store from './Pantallas/Store';
import {Fontisto} from '@expo/vector-icons'
import { color } from 'react-native-reanimated';

const Stack=createNativeStackNavigator()
const Stackhome=createNativeStackNavigator()
const tabs=createMaterialBottomTabNavigator()

const MiStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='recueperar' component={Recuperar} options={{headerShown:false}}/>
      <Stack.Screen name='registro' component={Registro} options={{headerShown:false}}/>
      <Stack.Screen name='homei' component={MiTabs} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}



const MiTabs=()=>{
  return(
    <tabs.Navigator activeColor={Colors.primary}
    labelMaxFontSizeMultiplier={10}
    inactiveColor={Colors.secondary}
    style={{activeColor:Colors.primary, inactiveColor:Colors.secondary}}>
      <tabs.Screen name='home' component={HStak} options={{
        tabBarIcon:()=><Fontisto name='coffeescript' size={25} color={Colors.primary}/>}}/>
      <tabs.Screen name='store' component={HStakStore} options={{
        tabBarIcon:()=><Fontisto name='shopping-store' size={25} color={Colors.primary}/>}}/>
      <tabs.Screen name='articles' component={HStaArticles} options={{
        tabBarIcon:()=><Fontisto name='onenote' size={25} color={Colors.primary}/>}}/>
    </tabs.Navigator>
  )
}

const HStak=()=>{
  return(
    <Stackhome.Navigator>
        <Stackhome.Screen name='homeh' component={Home} options={{headerShown:false}}/>
        <Stackhome.Screen name='detalle' component={Detalle} options={{headerShown:false}}/>
    </Stackhome.Navigator>  
    )
}

const HStakStore=()=>{
  return(
    <Stackhome.Navigator>
        <Stackhome.Screen name='store' component={Store} options={{headerShown:false}}/>
        <Stackhome.Screen name='detalle' component={Detalle} options={{headerShown:false}}/>
    </Stackhome.Navigator>  
    )
}

const HStaArticles=()=>{
  return(
    <Stackhome.Navigator>
        <Stackhome.Screen name='articles' component={Articles} options={{headerShown:false}}/>
        <Stackhome.Screen name='detalle' component={ArticlesDetalle} options={{headerShown:false}}/>
    </Stackhome.Navigator>  
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <MiStack/>
    </NavigationContainer>
  )
}
