import { useQuery } from '@apollo/react-hooks';

import { REPOSITORY_REVIEWS } from '../graphql/queries';
import { Repository, UseSingleRepository, SingleRepositoryQueryResult } from '../types';

const useSingleRepository: UseSingleRepository = (id) => {
  const { data, loading, refetch } = useQuery<SingleRepositoryQueryResult>(REPOSITORY_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  });

  let results: Repository | undefined;

  if(data) {
    results = data.repository;
  }

  return { results, loading, refetch };
};

export default useSingleRepository;