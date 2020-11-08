import React from 'react';
import { Formik } from 'formik';
import { TouchableWithoutFeedback, View, GestureResponderEvent } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const initialValues = {
  username: '',
  password: ''
};

interface TouchableNativeHandleSubmit {
  handleSubmit: ((e: GestureResponderEvent) => void | undefined)
}

const SignIn: React.FC = () => {
  const onSubmit = (values: typeof initialValues) => { console.log(values);};
  return (
    <Formik
      initialValues={initialValues}
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
            >Sign in</Text>
          </TouchableWithoutFeedback>
        </View>
      );
    }}
    </Formik>

  );
};

export default SignIn;