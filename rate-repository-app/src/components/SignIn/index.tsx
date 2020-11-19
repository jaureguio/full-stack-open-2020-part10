import React from 'react';
import { useHistory } from 'react-router-native';

import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const SignIn: React.FC = () => {
  const [ signIn ] = useSignIn();
  const history = useHistory();

  const onSubmit = async (credentials: Record<'username' | 'password', string>): Promise<void> => {    
    try {
      await signIn(credentials);
      history.push('/');
    } catch(error) {
      console.log('HANDLING ERROR: ', error);
    }
  };
  
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;