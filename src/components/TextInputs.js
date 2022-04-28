import React from 'react';
import {TextInput} from 'react-native-paper';

export const TextInputs = ({
  value,
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      keyboardType={keyboardType}
      autoCapitalize="none"
      placeholder={placeholder}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};
