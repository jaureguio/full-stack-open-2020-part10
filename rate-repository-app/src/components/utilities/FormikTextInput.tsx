import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

import { FormikTextInputProps } from '../../types';
import theme from '../../utils/theme';

const FormikTextInput: React.FC<FormikTextInputProps> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField<string>(name);
  const showError = meta.touched && meta.error;

  const handleChange = (value: string) => { helpers.setValue(value); };
  const handleTouch = () => helpers.setTouched(true);
  
  return (
    <>
      <TextInput
        onChangeText={handleChange}
        onBlur={handleTouch}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 5,
    color: theme.colors.error,
  }
});

export default FormikTextInput;