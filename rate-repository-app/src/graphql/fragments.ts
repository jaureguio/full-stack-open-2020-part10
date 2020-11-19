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