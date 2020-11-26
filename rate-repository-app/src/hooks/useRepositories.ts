import { useQuery } from '@apollo/react-hooks';

import { Repository, RepositoriesHookResult, RepositoriesQueryResult } from '../types';

import { REPOSITORIES } from '../graphql/queries';

const useRepositories: UseRepositories = ({ sortCriteria, filter, first }) => {
  const sortAndFilter = {
    ...sortCriteriaOptions[sortCriteria],
    filter
  };

  const { data, loading, fetchMore } = useQuery<RepositoriesQueryResult>(REPOSITORIES, {
    variables: { first, ...sortAndFilter },
    fetchPolicy: 'cache-and-network',
  });

  let results: Repository[] | undefined;

  if(data) {
    results = data.repositories.edges.map(({ node }) => node);
  }

  const handleFetchMore = async () => {
    /** 
     * Backend ignores the "after" variable when querying with a filter;
     * it sends all repositories found from the very first one matched
     * by the filter with each subsequent queries. This behavior makes the 
     * client app buggy with the implementation taken for the infinite scrolling
     * feature. Because of this, infinite scrolling is opt-out when a filter is
     * given.
     */
    if(filter) return;
    
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    // console.log('CANFETCHMORE?', canFetchMore);
    
    if(!canFetchMore) {
      return;
    }

    await fetchMore({
      query: REPOSITORIES,
      variables: {
        after: data?.repositories.pageInfo.endCursor,
        first,
        ...sortAndFilter
      },
      updateQuery: (prevResults, { fetchMoreResult }) => {
        const newRepositories = fetchMoreResult?.repositories;
        
        if(!newRepositories) {
          return prevResults;
        }

        const nextResults = {
          repositories: {
            ...prevResults.repositories,
            edges: [
              ...prevResults.repositories.edges,
              ...newRepositories.edges,
            ],
            pageInfo: newRepositories.pageInfo
          },
        };

        return nextResults;
      },
    });
  };

  return { results, loading, handleFetchMore };
};

interface SortCriteriaType {
  [k: string]: {
    orderBy: 'CREATED_AT' | 'RATING_AVERAGE';
    orderDirection: 'DESC' | 'ASC';
  }
}

const sortCriteriaOptions: SortCriteriaType = {
  latest_repos: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highest_rated_repos: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowest_rated_repos: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
};

interface UseRepositoriesParams {
  sortCriteria: string;
  filter: string;
  first: number;
}

type UseRepositories = (options: UseRepositoriesParams) => RepositoriesHookResult<Repository[]>;

export default useRepositories;