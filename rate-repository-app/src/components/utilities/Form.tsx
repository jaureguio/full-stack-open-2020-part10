import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Button from './Button';
import { TouchableNativeHandleSubmit } from '../../types';

// type Values = Record<string, string | number>;

interface FormProps<T, S> {
  inputs: {
    name: keyof T;
    placeholder?: string;
    secure?: boolean;
    initialValue?: string | number;
  }[];
  submitText?: string;
  onSubmit(values: T): Promise<void>;
  validationSchema: S;
}

function Form<ValuesType, SchemaType> ({
    inputs,
    submitText = 'Submit',
    onSubmit,
    validationSchema,
}: React.PropsWithChildren<FormProps<ValuesType, SchemaType>>): JSX.Element {

  const initialValues = inputs.reduce((acc, { name, initialValue = '' }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    acc[name] = initialValue;
    return acc;
  }, {} as ValuesType);

  const textInputs = inputs.reduce((fields, { name, placeholder, secure }) => {
    fields = fields.concat(<FormikTextInput key={String(name)} name={String(name)} placeholder={placeholder} secureTextEntry={secure} />);
    return fields;
  }, [] as React.ReactNode[]);
    
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
    {({ handleSubmit }: TouchableNativeHandleSubmit ) => {
      return ( 
        <View style={{
          paddingHorizontal: 12,
          paddingVertical: 8,
          justifyContent: 'space-evenly',
          backgroundColor: 'white',
        }}>
          {textInputs}
          <Button
            backgroundColor='primary'
            fontWeight='bold'
            customStyles={styles}
            onPress={handleSubmit}
          >
            {submitText}
          </Button>
        </View>
      );
    }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  }
});

export default Form;