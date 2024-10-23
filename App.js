import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Feather} from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const FeatherIcon = () => {
  <Feather
    name="home"
    size={50}
    color={'#000'} 
  />
}

import Login from './telas/Login';
import Cadastro from './telas/Cadastro' 
import HomeCliente from './telas/HomeCliente';
import PedidosCliente from './telas/PedidosCliente';
import Notificacao from  './telas/Notificacao';
import Perfil from './telas/Perfil';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Menu() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#f1a2bd', tabBarInactiveTintColor: '#83c0b6', tabBarStyle: {
      height: 105,
      borderRadius: 100,
      paddingTop: 8,
      
    }}}>
      <Tab.Screen name="Home Cliente" component={HomeCliente} options={{headerShown: false, title: '', tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" 
      color={color} size={40}/>}}/>
      <Tab.Screen name="Pedidos Cliente" component={PedidosCliente} options={{headerShown: false, title: '', tabBarIcon: ({color}) => <Ionicons name="bag-outline" color={color} size={35}/>}}/>
      <Tab.Screen name="Notificações" component={Notificacao} options={{headerShown: false, title: '', tabBarIcon: ({color}) => <Feather name="bell" color={color} size={35}/>}}/>
      <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false, title: '', tabBarIcon: ({color}) => <MaterialCommunityIcons name="account-circle-outline" color={color} size={40}/>}}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}