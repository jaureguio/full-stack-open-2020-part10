import { gql } from '@apollo/react-hooks';

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      username
    }
  }
`;