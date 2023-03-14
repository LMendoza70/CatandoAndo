import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pantallas/Login';
import Splash from './Pantallas/Splash';

const Stack=createNativeStackNavigator()
const MiStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MiStack/>
    </NavigationContainer>
  )
}
