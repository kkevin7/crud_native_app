import React, {useState} from 'react';
import {View, StyleSheet, } from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

     // campos formulario
     const [nombre, setNombre] = useState('');
     const [telefono, setTelefono] = useState('');
     const [correo, setCorreo] = useState('');
     const [empresa, setEmpresa] = useState('');
     const [alerta, setAlerta] = useState(false);

     const guardarCliente = () => {
         //Valirdar
        if(nombre === '' || telefono === '' || correo === '' || empresa === ''){
            setAlerta(true);          
            return;
        }
         //Generar el cliente
         const cliente = {nombre, telefono, empresa, correo};
         console.log(cliente);

         //Guardar el cliente en la API

         //Redireccionar

         //Limpiar el form (opcional)

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