import { gql } from 'apollo-boost';

import { REPOSITORY_DATA_FRAGMENT } from './fragments';

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      username
    }
  }
`;

export const REPOSITORIES = gql`
  query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
         ...repositoryData
        }
      }
    }
  }

  ${REPOSITORY_DATA_FRAGMENT}
`;

export const REPOSITORY = gql`
  query singleRepository($id: ID!) {
    repository(id: $id) {
      ...repositoryData
    }
  }

  ${REPOSITORY_DATA_FRAGMENT}
`;

export const REPOSITORY_REVIEWS = gql`
  query singleRepositoryWithReviews($id: ID!) {
    repository(id: $id) {
      ...repositoryData
      reviews {
        edges {
          node {
            id
            text
            createdAt
            rating
            repositoryId
            user {
              username
            }
          }
        }
      }
    }
  }

  ${REPOSITORY_DATA_FRAGMENT}
`;