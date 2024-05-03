import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FindVehicle = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quieres buscar tu vehiculo soñado</Text>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        container:{
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
export default FindVehicle
