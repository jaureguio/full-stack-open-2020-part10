import React, { useEffect } from 'react';
import { useHistory } from 'react-router-native';

import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const SignIn: React.FC = () => {
  const [ signIn, results ] = useSignIn();
  const history = useHistory();

  useEffect(() => {
    if(results.data) {
      console.log(results.data);
    }
  }, [results.data]);

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