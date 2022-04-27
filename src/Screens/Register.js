import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {theme} from '../../App.style';
import ButtonComponent from '../components/ButtonComponent';
import {TextInputs} from '../components/TextInputComponent';

const Register = ({onSubmit, initialValues}) => {
  const [username, setUsername] = useState(initialValues.username);
  const [email, setEmail] = useState(initialValues.email);
  const [password, setPassword] = useState(initialValues.password);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.content}>
          <TextInputs
            label="Name"
            value={username}
            onChangeText={setUsername}
          />
          <TextInputs
            label="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInputs
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <ButtonComponent
            mode="contained"
            onPress={() => {
              onSubmit(username, email, password);
            }}
            title="Register"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Register.defaultProps = {
  initialValues: {
    username: '',
    email: '',
    password: '',
  },
};
const styles = StyleSheet.create({
  content: {
    padding: 15,
    paddingTop: 0,
    height: '100%',
  },
  icon: {
    color: theme.colors.primary,
  },
  button: {
    marginHorizontal: 0,
    marginVertical: 15,
    backgroundColor: 'rgb(101,37,131)',
  },
});

export default Register;
