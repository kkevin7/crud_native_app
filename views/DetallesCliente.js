import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const DetallesCliente = ({navigation, route}) => {
  const {nombre, telefono, correo, empresa, id} = route.params.item;
  const {setConsultarAPI} = route.params;

  const mostrarConfirmacion = () => {
    Alert.alert(
      '¿Deseas eliminar este cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        {
          text: 'Si, Eliminar',
          onPress: () => eliminarContacto(),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  const eliminarContacto = async () => {
    try {
      let url = '';
      if (Platform.OS === 'ios') {
        url = `http://localhost:3000/clientes/${id}`;
      } else {
        url = `http://10.0.2.2:3000/clientes/${id}`;
      }
      const response = await axios.delete(url);
      if (response.status === 200) {
        //Redireccionar
        navigation.navigate('Inicio');
      }
    } catch (error) {
      console.log(error);
    }
    //Volver a consultar API
    setConsultarAPI(true);
  };

  return (
    <>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}>{nombre}</Headline>
        <Text style={styles.texto}>
          Empresa: <Subheading>{empresa}</Subheading>
        </Text>
        <Text style={styles.texto}>
          Teléfono: <Subheading>{telefono}</Subheading>
        </Text>
        <Text style={styles.texto}>
          Correo: <Subheading>{correo}</Subheading>
        </Text>

        <Button
          mode="contained"
          icon="cancel"
          style={styles.btnDelete}
          onPress={() => mostrarConfirmacion()}>
          Eliminar Cliente
        </Button>

        <FAB
          icon="pencil"
          style={globalStyles.fab}
          onPress={() =>
            navigation.navigate('NuevoCliente', {
              cliente: route.params.item,
              setConsultarAPI,
            })
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
  btnDelete: {
    marginTop: 100,
    backgroundColor: '#FA2A3A',
  },
});

export default DetallesCliente;
