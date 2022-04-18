/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper'
import Login from './Components/Screens/Login';
import Register from './Components/Screens/Register'
import { theme } from './App.style';
import GeoLocation from 'react-native-get-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Screens/Home';
import RegisterScreen from './Components/Screens/RegisterScreen'
import { Provider } from './context/AuthContext';


//importing required components 

const App = () => {

  // getting the  user Access for getting the Near by packers and Movers
  GeoLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      console.log("location", location);
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
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({

// });

export default App;
