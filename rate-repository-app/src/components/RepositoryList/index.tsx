import React from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList: React.FC = () => {
  const { repositories } = useRepositories([]);

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
