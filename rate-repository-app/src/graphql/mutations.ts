import { gql } from '@apollo/react-hooks';

export const AUTHORIZED_USER = gql`
  mutation authUser($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;