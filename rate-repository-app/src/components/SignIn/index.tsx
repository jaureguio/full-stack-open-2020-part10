import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { TouchableWithoutFeedback, View, GestureResponderEvent } from 'react-native';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

import useSignIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object()?.shape({
  username: yup
  .string()
  .trim()
  .required('Username is required'),
  password: yup
  .string()
  .trim()
  .required('Password is required'),
});

interface TouchableNativeHandleSubmit {
  handleSubmit: ((e: GestureResponderEvent) => void | undefined)
}

const SignIn: React.FC = () => {
  const [ signIn, results ] = useSignIn();
  const history = useHistory();

  useEffect(() => {
    if(results.data) {
      console.log(results.data);
    }
  }, [results.data]);

  const onSubmit = async (credentials: typeof initialValues): Promise<void> => {    
    try {
      await signIn(credentials);
      history.push('/');
    } catch(error) {
      console.log('HANDLING ERROR: ', error);
    }
  };
  
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

export default SignIn;