import React,{useEffect, useState} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import axios from 'axios';

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
        <Text>Inicio</Text>
        </>
     );
}
 
export default Inicio;