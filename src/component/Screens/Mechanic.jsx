import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper';

const Mechanic = () => {
    return (
    <View style={styles.contains}>
        <Text style={styles.title}> Agenda tu cita de revicion en nuestro taller.</Text>
        <Text>1. Mecanica General</Text>
        <Text>2. Alineacion y Balanceo</Text>
        <Text>3. Mantenimiento de Frenos</Text>
    </View>
      );
    };
    
    const styles = StyleSheet.create({
        contains:{
            flex:1,
            backgroundColor: 'black',
            justifyContent: 'center',
        },
        title:{
            color: 'rgb(199, 101, 101)',
            fontSize: 40,
            textAlign: 'center'
        },
    });
export default Mechanic
