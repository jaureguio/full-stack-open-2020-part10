import React from 'react';
import { useParams } from 'react-router-native';
import useSingleRepository from '../../hooks/useSingleRepository';

import RepositoryView from '../RepositoryView';
// import Text from '../utilities/Text';

import { Review } from '../../types';

const SingleRepository: React.FC = () => {
  const { id: repositoryId } = useParams<{ id: string }>();
  const { results, loading, handleFetchMore } = useSingleRepository({
    repositoryId, 
    first: 4
  });

  // if(loading || !results) return <Text>Loading...</Text>;
  
  const reviewData: Review[] | undefined = results?.reviews.edges.map(({ node }) => node);

  return ( 
    <RepositoryView
      repository={results}
      reviews={reviewData}
      handleFetchMore={handleFetchMore}
      loadingReviews={loading}
      githubLink
    />
  );
};

export default SingleRepository;