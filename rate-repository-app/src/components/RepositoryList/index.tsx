import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryListItem from './RepositoryListItem';

import { Repository } from '../../types';
import useRepositories from '../../hooks/useRepositories';

interface RepositoryListContainerProps {
  repositories: Repository[];
}

const RepositoryList: React.FC = () => {
  const { repositories } = useRepositories([]);

  return <RepositoryListContainer repositories={repositories} />;
};

export const RepositoryListContainer: React.FC<RepositoryListContainerProps> = ({ repositories }) => {
  return (
    <FlatList
      data={repositories}
      keyExtractor={repo => repo.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryListItem repo={item} />} 
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


export default RepositoryList;
