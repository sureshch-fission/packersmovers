import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {


  //useState for storing inputs

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [allData, setAllData] = useState([]);

  const onSubmit = async (email, password) => {

    console.log('onsubmit', email, password)
    const enteredEmail = JSON.parse(await AsyncStorage.getItem('email'));    // getting the values from async storage to validate the user
    const enteredPassword = JSON.parse(await AsyncStorage.getItem('password'));   

      // for validating email and password stored in asyncstorage
    if (!email && !password) {
      alert('Please Fill all the Fields')
    }
    else if (email !== enteredEmail || password !== enteredPassword) {
      alert("Please enter Correct Information")
    } else {
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    }
  }
  
      // navigating to register page
  const onButtonPress = () => {
    navigation.navigate('Register'); //navigating back to the register page
  }
  return (

    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card>
          <Card.Title title="Packers & Movers" titleStyle={styles.cardtitle}></Card.Title>
          <Card.Content>
            <TextInput label="email" keyboardType="email-address" value={email} onChangeText={text => setEmail(text)} autoCapitalize="none" autoCorrect={false}></TextInput>
            <TextInput label="Password" secureTextEntry={true} value={password} onChangeText={text => setPassword(text)}></TextInput>
            <Button mode="contained" style={styles.button} onPress={() => onSubmit(email, password)}>Login</Button>
            <Button style={styles.button} onPress={onButtonPress}>Register</Button>
          </Card.Content>
        </Card>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    dispaly: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection:'row',
    backgroundColor: "rgb(101,37,131)",
    width: "100%",
    flex: 1
  },
  view: {
    width: "80%",

  },
  cardtitle: {
    color: "rgb(101,37,131)"
  },
  button: {
    marginVertical: 6,
    marginHorizontal: 0
  }
})

export default Login;