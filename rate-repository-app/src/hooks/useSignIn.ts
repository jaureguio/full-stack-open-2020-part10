import { useMutation, useApolloClient, MutationResult } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';

import { AUTHORIZE_USER } from '../graphql/mutations';
import useAuth from './useAuth';
import { Credentials } from '../types';

interface AuthorizedUserData {
  authorize: {
    accessToken: string;
  }
}

type UseSignInHook = [
  ((credentials: Credentials) => Promise<AuthorizedUserData | null | undefined>), 
  MutationResult<AuthorizedUserData>
];

function useSignIn(): UseSignInHook {
  const history = useHistory();
  const [mutate, result] = useMutation<AuthorizedUserData, Credentials>(AUTHORIZE_USER);
  const authStorage = useAuth();
  const apolloClient = useApolloClient();

  const signIn = async (credentials: Credentials) => {
    const { data } = await mutate({ variables: credentials });
    if(data?.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      await apolloClient.resetStore();
      history.push('/');
    }
    return data;
  };

  return [signIn, result];
}

export default useSignIn;