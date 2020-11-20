import React from 'react';
import * as yup from 'yup';

import Form from '../utilities/Form';
import { Credentials } from '../../types';

type SignInFormContainerProps = { onSubmit(values: Credentials): Promise<void> };

const SignInFormContainer: React.FC<SignInFormContainerProps> = ({ onSubmit }) => (
  <Form<Credentials, typeof schema> 
    onSubmit={onSubmit} 
    submitText='Sign In'
    inputs={[
      {
        name: 'username',
        placeholder: 'Username',
      },
      {
        name: 'password',
        placeholder: 'Password',
        secure: true
      }
    ]}
    validationSchema={schema}
  />
);

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

export default SignInFormContainer;