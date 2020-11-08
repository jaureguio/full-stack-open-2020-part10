import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

import { FormikTextInputProps } from '../types';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  }
});

const FormikTextInput: React.FC<FormikTextInputProps> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField<string>(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value: string) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;