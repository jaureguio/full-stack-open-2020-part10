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
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $filter: String
    $first: Int,
    $after: String
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $filter,
      first: $first,
      after: $after
    ) {
      edges {
        node {
         ...repositoryData
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
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
  query singleRepositoryWithReviews(
    $id: ID!,
    $first: Int,
    $after: String
  ) {
    repository(id: $id) {
      ...repositoryData
      reviews(first: $first, after: $after) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }

  ${REPOSITORY_DATA_FRAGMENT}
`;