import { useQuery, gql } from '@apollo/react-hooks';

import { UseRepositories, PagedRepositories, Repository } from '../types';

export const PAGED_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
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
      }
    }
  }
`;


const useRepositories: UseRepositories = (initialRepositories = []) => {
  const { data, loading, refetch } = useQuery<PagedRepositories>(PAGED_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  let repositories: Repository[] = initialRepositories;

  if(data) {
    repositories = data.repositories.edges.map(({ node }) => node);
  }

  return { repositories, loading, refetch };
};

export default useRepositories;