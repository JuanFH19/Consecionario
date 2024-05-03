import React, { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
 
const AppointmentForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 
  const handleSubmit = () => {
    // Handle form submission here
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
   
    navigation.navigate('Confirmation', { name: name, date: date, time: time });
  };
 
  return (
    <PaperProvider>
      <View style={styles.contains}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={name => setName(name)} />
 
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.textInput}
          value={date}
          onChangeText={date => setDate(date)} />
 
        <Text
          style={styles.label}>Time:</Text>
        <TextInput
          style={styles.textInput}
          value={time}
          onChangeText={time => setTime(time)} />
 
        <Button
          style={styles.Button}
          mode = 'contained'
          title="Submit" onPress={handleSubmit}>
            Enviar
        </Button>
      </View>
    </PaperProvider>
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
  textInput:{
    color: 'rgb(199, 101, 101)',
    fontSize: 20,
    textAlign: 'center',
  },
  label:{
    color:'white',
    fondSize: 60,
    textAlign: 'center',
  },
  Button:{
    color: 'rgb(236, 87, 87)',
    marginVertical: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: 'white',
  },
});
 
export default AppointmentForm;