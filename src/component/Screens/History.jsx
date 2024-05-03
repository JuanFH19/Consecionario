import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

const History = () => {
    const navigation = useNavigation();
return (
    <View style={styles.contains}>
        <Text style={styles.title}>Revisa el Historial de tu vehiculo</Text>
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

export default History
