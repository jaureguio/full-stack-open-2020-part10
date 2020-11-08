import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import { TextInputProps } from '../types';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.mainBackground,
    borderRadius: 4,
  },
  errorState: {
    borderColor: theme.colors.error
  }
});

const TextInput: React.FC<TextInputProps> = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.container,
    Boolean(error) && styles.errorState,
    style
  ];
  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;