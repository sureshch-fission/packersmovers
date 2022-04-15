import React, { useContext } from 'react';
import Register from './Register';
import { Context } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CreateScreen = ({ navigation }) => {
    const { register } = useContext(Context);

    const onSubmitHandler = async (username, email, password) => {
    
        try {
            if (email === '' || password === '' || username === '') {      // condition to ckeck weather the field are empty or not
                alert('Please Fill all the Fields');
            }
            //    register(username,email,password, ()=>{
            //      navigation.navigate("Login")
            //   })
            else{
                alert('Thank you for Registering');         // if the fields are not empty user will navigated to login page
            navigation.navigate('Login'); 
            }
            
            
           
            await AsyncStorage.setItem('email', JSON.stringify(email));      //storing the email data in asyncStorage
            await AsyncStorage.setItem('password', JSON.stringify(password));    //storing the password in asyncStorage
        } catch (error) {
            console.log('error', error);
        }
    };

    return <Register onSubmit={onSubmitHandler} />;
};

export default CreateScreen;
