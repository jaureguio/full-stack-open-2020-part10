import { gql } from "apollo-boost";

export const REPOSITORY_DATA_FRAGMENT = gql`
  fragment repositoryData on Repository {
    id
    fullName
    description
    language
    ownerAvatarUrl
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
  }
`;

export const REVIEWS_FRAGMENT = gql`
  fragment reviewsData on ReviewConnection {
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
`;