import { useQuery } from '@apollo/react-hooks';

import { REPOSITORY_REVIEWS } from '../graphql/queries';
import {
  Repository,
  RepositoriesHookResult,
} from '../types';

const useSingleRepository: UseSingleRepositoryType = ({ repositoryId, first }) => {
  const { data, loading, fetchMore } = useQuery<SingleRepoQueryResult>(REPOSITORY_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { id: repositoryId, first }
  });

  const handleFetchMore = async () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if(!canFetchMore) {
      return;
    }

    await fetchMore({
      query: REPOSITORY_REVIEWS,
      variables: {
        id: repositoryId,
        after: data?.repository.reviews.pageInfo.endCursor,
        first,
      },
      updateQuery: (prevResults, { fetchMoreResult }) => {
        const newReviews = fetchMoreResult?.repository.reviews;
        
        if(!newReviews) {
          return prevResults;
        }

        const nextResults = {
          repository: {
            ...prevResults.repository,
            reviews: {
              ...prevResults.repository.reviews,
              edges: [
                ...prevResults.repository.reviews.edges,
                ...newReviews.edges,
              ],
              pageInfo: newReviews.pageInfo
            }
          }
        };

        return nextResults;
      }
    });
  };

  let results: Repository | undefined;

  if(data) {
    results = data.repository;
  }

  return { results, loading, handleFetchMore };
};


interface UseSingleRepositoryParams {
  repositoryId: string;
  first?: number;
}

type UseSingleRepositoryType = (variables: UseSingleRepositoryParams) => RepositoriesHookResult<Repository>;

interface SingleRepoQueryResult {
  repository: Repository
}

export default useSingleRepository;