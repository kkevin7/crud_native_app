import React from 'react';
import {View, StyleSheet, Text,} from 'react-native';

const DetallesCliente = ({route}) => {
    const {item } = route.params;
    return ( 
        <>
        <Text>DetallesCliente</Text>
        </>
     );
}
 
export default DetallesCliente;