import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import * as yup from 'yup';

import Form from '../utilities/Form';
import { Credentials } from '../../types';

const SignUp: React.FC = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (credentials: Credentials) => {
    const { username, password } = credentials;
    try {
      await signUp(credentials);
      await signIn({ username, password });
  
    } catch (error) {
      console.error(error);
    }
  };

  return <Form<Credentials & { confirmation: string }, typeof signUpSchema>
    onSubmit={({ username, password }) => onSubmit({ username, password })}
    submitText='Sign Up'
    validationSchema={signUpSchema}
    inputs={[
      { name: 'username', placeholder: 'Username' },
      { name: 'password', placeholder: 'Password', secure: true },
      { name: 'confirmation', placeholder: 'Password confirmation', secure: true }
    ]}
  />;
};

const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username is too short')
    .max(30, 'Username is too long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Username is too short')
    .max(50, 'Username is too long')
    .required('Password is required'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required')
});

export default SignUp;