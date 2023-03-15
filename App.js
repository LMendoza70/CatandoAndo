import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Articles from './Pantallas/Articles';
import Detalle from './Pantallas/Detalle';
import Home from './Pantallas/Home';
import Login from './Pantallas/Login';
import Recuperar from './Pantallas/Recuperar';
import Registro from './Pantallas/Registro';
import Splash from './Pantallas/Splash';
import Store from './Pantallas/Store';

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
    <tabs.Navigator>
      <tabs.Screen name='home' component={HStak}/>
      <tabs.Screen name='store' component={Store}/>
      <tabs.Screen name='articles' component={Articles}/>
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

export default function App() {
  return (
    <NavigationContainer>
      <MiStack/>
    </NavigationContainer>
  )
}
