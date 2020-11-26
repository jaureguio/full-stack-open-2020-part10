import React from 'react';
import { View } from 'react-native';

import RepositoryInfo from './RepositoryInfo';
import RepositoryStats from './RepositoryStats';
import GitHubLink from './GitHubLink';

import { RepositoryViewProps } from './index';
import { Repository } from '../../types';

const RepositoryData: React.FC<RepositoryDataProps> = ({ repository, githubLink = false }) => {

  if(!repository) return null;
  
  return (
    <View style={githubLink && { marginBottom: 10, backgroundColor: 'white' }}>
      <RepositoryInfo
        ownerAvatarUrl={repository.ownerAvatarUrl}
        fullName={repository.fullName}
        description={repository.description}
        id={repository.id}
        language={repository.language}
      />
      <RepositoryStats
        id={repository.id}
        stars={repository.stargazersCount}
        forks={repository.forksCount}
        reviews={repository.reviewCount}
        ratingAvg={repository.ratingAverage}
      />
      {githubLink && <GitHubLink repositoryUrl={repository.url} />}
    </View>
  );
};

interface RepositoryDataProps extends Omit<RepositoryViewProps, 'reviews' | 'handleFetchMore' | 'loading'> {
  repository: Repository;
}

export default RepositoryData;