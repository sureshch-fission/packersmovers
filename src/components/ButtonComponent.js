import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
const ButtonComponent = ({onPress, title, mode}) => {
  return (
    <Button style={styles.button} onPress={onPress} mode={mode}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 6,
    marginHorizontal: 0,
  },
});

export default ButtonComponent;
