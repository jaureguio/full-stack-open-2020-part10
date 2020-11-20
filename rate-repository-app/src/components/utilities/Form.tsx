import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Button from './Button';
import { TouchableNativeHandleSubmit } from '../../types';

// type Values = Record<string, string | number>;

// type Schema = yup.ObjectSchema<yup.Shape<Record<string,unknown> | undefined, Values>, Record<string,unknown>>;

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

// interface FormFactory<T> { 
//   textInputs: React.ReactNode[];
//   initialValues: Record<keyof T, string | number>;
// }

function Form<ValuesType, SchemaType> ({
    inputs,
    submitText = 'Submit',
    onSubmit,
    validationSchema,
}: React.PropsWithChildren<FormProps<ValuesType, SchemaType>>): JSX.Element {

  // const initialValues: Record<string, number | string> = {};
  // const textInputs: React.ReactNode[] = [];

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
          <Button onPress={handleSubmit} backgroundColor='primary' fontWeight='bold'>{submitText}</Button>
        </View>
      );
    }}
    </Formik>
  );
}

export default Form;