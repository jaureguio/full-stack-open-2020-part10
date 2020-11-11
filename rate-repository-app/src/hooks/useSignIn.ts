import { useMutation, useApolloClient } from '@apollo/react-hooks';

import { UseSignInHook, NewAccessToken, Credentials } from '../types';
import { AUTHORIZED_USER } from '../graphql/mutations';
import useAuth from './useAuth';

interface AuthorizeData {
  authorize: NewAccessToken;
}

function useSignIn(): UseSignInHook {
  const [mutate, result] = useMutation<AuthorizeData, Credentials>(AUTHORIZED_USER);
  const authStorage = useAuth();
  const apolloClient = useApolloClient();

  const signIn = async (credentials: Credentials) => {

    const { data } = await mutate({ variables: credentials });
    if(data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      await apolloClient.resetStore();
    }
    return data;
  };

  return [signIn, result];
}

export default useSignIn;