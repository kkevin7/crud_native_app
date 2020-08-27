import React, {useState} from 'react';
import {View, StyleSheet, } from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

     // campos formulario
     const [nombre, setNombre] = useState('');
     const [telefono, setTelefono] = useState('');
     const [correo, setCorreo] = useState('');
     const [empresa, setEmpresa] = useState('');

    return ( 
        <>
            <View style={globalStyles.contenedor}>
                <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
                <TextInput
                    label="Nombre"
                    placeholder="Juan Perez"
                    onChangeText={(text) => setNombre(text)}
                    value={nombre}
                    style={styles.input}
                 />
                <TextInput
                    label="Teléfono"
                    placeholder="111-444-5548"
                    onChangeText={(text) => setTelefono(text)}
                    value={telefono}
                    style={styles.input}
                 />
                 <TextInput
                    label="Correo"
                    placeholder="correo@correo.com"
                    onChangeText={(text) => setCorreo(text)}
                    value={correo}
                    style={styles.input}
                 />
                 <TextInput
                    label="Empresa"
                    placeholder="Nombre de la empresa"
                    onChangeText={(text) => setEmpresa(text)}
                    value={empresa}
                    style={styles.input}
                 />
         
            </View>
        </>
     );
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 20,
        backgroundColor: 'transparent',
    }
});
 
export default NuevoCliente;