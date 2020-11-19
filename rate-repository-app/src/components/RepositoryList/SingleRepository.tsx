import React from 'react';
import { useParams } from 'react-router-native';
import useSingleRepository from '../../hooks/useSingleRepository';

import RepositoryView from '../RepositoryView';
import Text from '../utilities/Text';

import { Review } from '../../types';

const SingleRepository: React.FC = () => {
  const { id: repositoryId } = useParams<{ id: string }>();
  const { results, loading } = useSingleRepository(repositoryId);

  let reviewData: Review[] | undefined;

  if(results) {
    // Use of 'var' keyword makes repositoryInfo available throughout the whole SingleRepository component
    // eslint-disable-next-line no-var
    var { reviews, ...repositoryInfo } = results;
    reviewData = reviews?.edges.map(({ node }) => node);
  }

  if(loading) return <Text>Loading...</Text>;

  return <RepositoryView repository={repositoryInfo} reviews={reviewData} githubLink />;
};

export default SingleRepository;