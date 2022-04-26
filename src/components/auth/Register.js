import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, TextInput, ThemeProvider } from 'react-native-paper';
import { theme } from '../../../App.style';


const Register = ({ onSubmit, initialValues }) => {

   
    const [username, setUsername] = useState(initialValues.username);
    const [email, setEmail] = useState(initialValues.email);
    const [password, setPassword] = useState(initialValues.password);

    return (
        <SafeAreaView style={styles.mainContainer} >
            <ScrollView>

                <View style={styles.content}>
                    <TextInput label="name" value={username} onChangeText={text => setUsername(text)}></TextInput>
                    <TextInput label="email" keyboardType='email-address' value={email} onChangeText={text => setEmail(text)} />
                    <TextInput label="Password" secureTextEntry={true} value={password} onChangeText={text => setPassword(text)}></TextInput>
                    <Button mode="contained" style={styles.button} onPress={() => onSubmit(username, email, password)}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

Register.defaultProps = {
    initialValues: {
        username: '',
        email: '',
        password: ''
    }
}
const styles = StyleSheet.create({
    content: {
        padding: 15,
        paddingTop: 0,
        height: "100%"
    },
    icon: {
        color: theme.colors.primary
    },
    button: {
        marginHorizontal: 0,
        marginVertical: 15,
        backgroundColor: "rgb(101,37,131)",
    }
})

export default Register;