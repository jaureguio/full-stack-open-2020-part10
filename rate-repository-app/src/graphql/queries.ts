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
    }
  }

  ${REPOSITORY_DATA}
`;

export const SINGLE_REPO_REVIEWS = gql`
  query singleRepo($id: ID!) {
    repository(id: $id) {
      reviews {
        edges {
          node {
            id
            text
            createdAt
            rating
            user {
              username
            }
          }
        }
      }
    }
  }
`;