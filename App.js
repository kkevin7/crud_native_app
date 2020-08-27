import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
     <NavigationContainer>
       <Stack.Navigator
        initialRouteName="Inicio"
       >
         <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
              title: "Inicio"
            }}
         />
         <Stack.Screen
            name="NuevoCliente"
            component={NuevoCliente}
            options={{
              title: "Nuevo Cliente"
            }}
         />
         <Stack.Screen
            name="DetallesCliente"
            component={DetallesCliente}
            options={{
              title: "Detalles Clientes"
            }}
         />
       </Stack.Navigator>
     </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
