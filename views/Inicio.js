import React,{useEffect, useState} from 'react';
import {View, StyleSheet, Text, Platform, FlatList} from 'react-native';
import {List, Headline} from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

const Inicio = () => {

    const [clientes, setClientes] = useState(false);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                if(Platform.OS === 'ios'){
                    //Para ios
                   const response = await axios.get('http://localhost:3000/clientes');
                   setClientes(response.data);
                }else{
                   // para android
                   const response = await axios.get('http://10.0.2.2:3000/clientes');
                   setClientes(response.data);
                }
            } catch (error) {
                console.error;
            }
        }

        obtenerClientesApi();
    },[]);

    if(!clientes ) return null;

    return ( 
        <>
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : "Aún no hay Clientes"}</Headline>
            <FlatList 
                keyExtractor={cliente => (cliente.id).toString()}
                data={clientes}
                renderItem={({item}) => (
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                    />
                )}
            />
        </View>
        </>
     );
}
 
export default Inicio;