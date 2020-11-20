import React from 'react';

import useSignIn from '../../hooks/useSignIn';
import { Credentials } from '../../types';
import SignInFormContainer from './SignInFormContainer';

const SignInForm: React.FC = () => {
  const [ signIn ] = useSignIn();

  const onSubmit = async (credentials: Credentials) => {    
    try {
      await signIn(credentials);
    } catch(error) {
      console.log('HANDLING ERROR: ', error);
    }
  };
  
  return <SignInFormContainer onSubmit={onSubmit} />;
};

export default SignInForm;