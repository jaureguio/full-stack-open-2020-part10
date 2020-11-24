import React, { useState } from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';


const RepositoryList: React.FC = () => {
  const [sorting, setSorting] = useState('latest_repos');
  const [filter, setFilter] = useState('');
  const { results } = useRepositories({ sortCriteria: sorting, filter });

  return (
    <RepositoryListContainer
      repositories={results} 
      setSortingCriteria={setSorting} 
      sorting={sorting} 
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default RepositoryList;
