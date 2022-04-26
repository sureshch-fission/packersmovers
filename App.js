

import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper'
import Login from './src/components/auth/Login';
import Register from './src/components/auth/Register'
import { theme } from './App.style';
import GeoLocation from 'react-native-get-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/home/Home';
import RegisterScreen from './src/components/auth/RegisterScreen'
import { Provider } from './src/context/AuthContext';
import PackersmoversScreen from './src/components/screens/PackersMoversScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';



//importing required components

const App = () => {

  // getting the  user Access for getting the Near by packers and Movers
  GeoLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      console.log("location", location);
      AsyncStorage.setItem('userLocation', JSON.stringify(location));
    })
    .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
    })

  //for navigation purpose
  const Stack = createNativeStackNavigator();

  return ( // returning the Views
  <Provider>
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen  initialRouteName='Packers' name="Packers" component={PackersmoversScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({

// });

export default App;
