import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import { TextInputProps } from '../../types';
import theme from '../../utils/theme';

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

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.mainBackground,
    borderRadius: 4,
  },
  errorState: {
    borderColor: theme.colors.error
  }
});

export default TextInput;