import { useQuery } from '@apollo/react-hooks';

import { Repository, RepositoriesHookResult, RepositoriesQueryResult } from '../types';

import { REPOSITORIES } from '../graphql/queries';

interface SortCriteriaTypes {
  [k: string]: {
    orderBy: 'CREATED_AT' | 'RATING_AVERAGE';
    orderDirection: 'DESC' | 'ASC';
  }
}

type UseRepositories = ({ sortCriteria, filter }: Record<string, string>) => RepositoriesHookResult<Repository[]>;

const sortCriteriaOptions: SortCriteriaTypes = {
  latest_repos: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highest_rated_repos: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowest_rated_repos: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
};

const useRepositories: UseRepositories = ({ sortCriteria, filter }) => {
  const { data, loading, refetch } = useQuery<RepositoriesQueryResult>(REPOSITORIES, {
    variables: { ...sortCriteriaOptions[sortCriteria], filter },
    fetchPolicy: 'cache-and-network',
  });

  let results: Repository[] | undefined;

  if(data) {
    results = data.repositories.edges.map(({ node }) => node);
  }

  return { results, loading, refetch };
};

export default useRepositories;