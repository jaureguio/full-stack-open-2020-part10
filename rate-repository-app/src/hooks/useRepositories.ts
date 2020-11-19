import { useQuery } from '@apollo/react-hooks';

import { Repository, UseRepositories, RepositoriesQueryResult } from '../types';
import { REPOSITORIES } from '../graphql/queries';

const useRepositories: UseRepositories = () => {
  const { data, loading, refetch } = useQuery<RepositoriesQueryResult>(REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  let results: Repository[] | undefined;

  if(data) {
    results = data.repositories.edges.map(({ node }) => node);
  }

  return { results, loading, refetch };
};

export default useRepositories;