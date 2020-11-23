import React, { useState } from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';


const RepositoryList: React.FC = () => {
  const [sorting, setSorting] = useState('latest_repos');
  const { results } = useRepositories(sorting);

  return (
    <RepositoryListContainer
      repositories={results} 
      setSortingCriteria={setSorting} 
      sorting={sorting} 
    />
  );
};

export default RepositoryList;
