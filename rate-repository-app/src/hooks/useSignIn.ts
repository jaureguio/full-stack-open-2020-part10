import { useMutation } from '@apollo/react-hooks';

import { UseSignInHook, Credentials } from '../types';
import { AUTHORIZED_USER } from '../graphql/mutations';

const useSignIn: UseSignInHook = () => {
  const [mutate, result] = useMutation(AUTHORIZED_USER);

  const signIn = async (credentials: Credentials) => {
    return await mutate({ variables: credentials });
  };

  return [signIn, result];
};

export default useSignIn;