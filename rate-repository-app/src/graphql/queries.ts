import { gql } from 'apollo-boost';

import { REPOSITORY_DATA } from './fragments';

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      username
    }
  }
`;

export const SINGLE_REPO = gql`
  query singleRepo($id: ID!) {
    repository(id: $id) {
      ...repositoryData
      url
    }
  }

  ${REPOSITORY_DATA}
`;