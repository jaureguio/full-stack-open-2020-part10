import React from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList: React.FC = () => {
  const { results } = useRepositories();

  return <RepositoryListContainer repositories={results} />;
};

export default RepositoryList;
