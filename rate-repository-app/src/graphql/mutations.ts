import { gql } from '@apollo/react-hooks';

export const AUTHORIZE_USER = gql`
  mutation authUser($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview(review: {
      repositoryName: $repositoryName, 
      ownerName: $ownerName,
      rating: $rating,
      text: $text
    }) {
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
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;
