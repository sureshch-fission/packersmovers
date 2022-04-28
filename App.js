

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import Login from './Components/Screens/Login';
import { theme } from './App.style';
import GeoLocation from 'react-native-get-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './Components/Screens/RegisterScreen'
import { Provider } from './context/AuthContext';
import PackersmoversScreen from './src/screens/PackersmoversScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';



//importing required components

const App = () => {

  // getting the  user Access for getting the Near by packers and Movers
  GeoLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      
      // AsyncStorage.setItem('userLocation', JSON.stringify(location));
      // console.log(location)
      AsyncStorage.setItem('userLatitude', JSON.stringify(location.latitude));
      AsyncStorage.setItem('userLongitude', JSON.stringify(location.longitude));

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
