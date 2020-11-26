import React, { useState } from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';


const RepositoryList: React.FC = () => {
  const [sorting, setSorting] = useState('latest_repos');
  const [filter, setFilter] = useState('');
  const { results: repositories, loading, handleFetchMore } = useRepositories({
    sortCriteria: sorting,
    filter,
    first: 4
  });

  const onEndReached: () => void = () => {
    handleFetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      setSortingCriteria={setSorting}
      sorting={sorting}
      filter={filter}
      setFilter={setFilter}
      onEndReached={onEndReached}
    />
  );
};

export default RepositoryList;
