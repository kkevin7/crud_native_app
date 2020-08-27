import React,{useEffect, useState} from 'react';
import {View, StyleSheet, Text, Platform, FlatList} from 'react-native';
import {List, Headline, Button, FAB} from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

const Inicio = ({navigation}) => {

    const [clientes, setClientes] = useState(false);
    const [consultarAPI, setConsultarAPI] = useState(true);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                if(Platform.OS === 'ios'){
                    //Para ios
                   const response = await axios.get('http://localhost:3000/clientes');
                   setClientes(response.data);
                   setConsultarAPI(false);
                }else{
                   // para android
                   const response = await axios.get('http://10.0.2.2:3000/clientes');
                   setClientes(response.data);
                   setConsultarAPI(false);
                }
            } catch (error) {
                console.error;
            }
        }

        if(consultarAPI){
            obtenerClientesApi();
        }

    },[consultarAPI]);

    if(!clientes ) return null;

    return ( 
        <>
        <View style={globalStyles.contenedor}>
            <Button icon="plus-circle" onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI})}>
                Nuevo Cliente
            </Button>

            <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : "Aún no hay Clientes"}</Headline>
            <FlatList 
                keyExtractor={cliente => (cliente.id).toString()}
                data={clientes}
                renderItem={({item}) => (
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                        onPress={() => navigation.navigate('DetallesCliente',{item})}
                    />
                )}
            />
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI})}
            />
        </View>
        </>
     );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 0,
        right: 0,
        bottom: 20,
    }
});
 
export default Inicio;