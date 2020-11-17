import React from 'react';
import { Formik } from 'formik';
import { TouchableWithoutFeedback, View, GestureResponderEvent } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from '../utilities/FormikTextInput';
import Text from '../utilities/Text';

interface Values {
  username: string;
  password: string;
}

type Schema = yup.ObjectSchema<yup.Shape<Record<string,unknown> | undefined, Values>, Record<string,unknown>>;

interface SignInContainerProps<T, S> {
  initialValues?: T
  validationSchema?: S;
  onSubmit(values: T): Promise<void>; 
}

interface TouchableNativeHandleSubmit {
  handleSubmit: ((e: GestureResponderEvent) => void | undefined)
}

const initValues = {
  username: '',
  password: ''
};

const schema = yup.object().shape({
  username: yup
  .string()
  .trim()
  .required('Username is required'),
  password: yup
  .string()
  .trim()
  .required('Password is required'),
});

const SignInContainer: React.FC<SignInContainerProps<Values, Schema>> = ({ initialValues = initValues, validationSchema = schema, onSubmit}) => {
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
          height: 200,
          justifyContent: 'space-evenly',
          backgroundColor: 'white',
        }}>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput name='password' placeholder='Password' secureTextEntry />
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                borderRadius: 4,
                padding: 12
              }}
              backgroundColor='primary'
              fontWeight='bold'
            >
              Sign in
            </Text>
          </TouchableWithoutFeedback>
        </View>
      );
    }}
    </Formik>
  );
};

export default SignInContainer;