import { useMutation, MutationResult } from '@apollo/react-hooks';

import { CREATE_USER } from '../graphql/mutations';
import { Credentials } from '../types';

interface CreatedUserData {
  createUser: {
    username: string;
  }
}

type UseSignUpHook = [
  (credentials: Credentials) => Promise<CreatedUserData | null | undefined >,
  MutationResult<CreatedUserData>
];

function useSignUp(): UseSignUpHook {
  const [mutate, result] = useMutation<CreatedUserData, Credentials>(CREATE_USER);
  
  const signUp = async (credentials: Credentials) => {
    const { data } = await mutate({ variables: credentials });
    return data;
  };
  
  return [signUp, result];
}

export default useSignUp;