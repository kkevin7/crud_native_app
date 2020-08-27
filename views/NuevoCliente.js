import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform } from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const NuevoCliente = ({navigation, route}) => {
    const {cliente, setConsultarAPI} = route.params;

     // campos formulario
     const [nombre, setNombre] = useState('');
     const [telefono, setTelefono] = useState('');
     const [correo, setCorreo] = useState('');
     const [empresa, setEmpresa] = useState('');
     const [alerta, setAlerta] = useState(false);

     //detectar si estamos editando o no
    useEffect(() => {
        if(route.params.cliente){
            const {nombre, telefono, correo, empresa} = route.params.cliente;
            setNombre(nombre);
            setTelefono(telefono);
            setCorreo(correo);
            setEmpresa(empresa);
        }else{
            console.log('NUEVO CLIENTE');
        }
    },[])

     const guardarCliente = async () => {
         //Valirdar
        if(nombre === '' || telefono === '' || correo === '' || empresa === ''){
            setAlerta(true);          
            return;
        }
         //Generar el cliente
         const cliente = {nombre, telefono, empresa, correo};

         //Guardar el cliente en la API
         try {

            if(route.params.cliente){
                const {id} = route.params.cliente;
                cliente.id;
                if(Platform.OS === 'ios'){
                    //Para ios
                   await axios.put(`http://localhost:3000/clientes/${id}`, cliente);
                }else{
                   // para android
                   await axios.put(`http://10.0.2.2:3000/clientes/${id}`, cliente);
                }
            }else{
                if(Platform.OS === 'ios'){
                    //Para ios
                   await axios.post(`http://localhost:3000/clientes`, cliente);
                }else{
                   // para android
                   await axios.post(`http://10.0.2.2:3000/clientes`, cliente);
                }
            }
         } catch (error) {
            console.log(error);
         }

         //Redireccionar
        navigation.navigate('Inicio');

         //Limpiar el form (opcional)
         setNombre('');
         setTelefono('');
         setCorreo('');
         setEmpresa('');

         //Cambiar a true para traernos el nuevo cliente
         setConsultarAPI(true);
     }

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
                 <Button icon="pencil-circle" mode="contained" onPress={() => guardarCliente()}>
                     Guardar Cliente
                 </Button>

                 <Portal>
                     <Dialog
                        visible={alerta}
                        onDismiss={() => setAlerta(false)}
                     >
                         <Dialog.Title>Error</Dialog.Title>
                         <Dialog.Content>
                             <Paragraph>
                                 Todos los campos son obligatorios
                             </Paragraph>
                         </Dialog.Content>
                         <Dialog.Actions>
                             <Button onPress={() => setAlerta(false)}>OK</Button>
                         </Dialog.Actions>
                     </Dialog>
                 </Portal>
         
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