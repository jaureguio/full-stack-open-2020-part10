import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import RepositoryListItem from './RepositoryListItem';
import { Repository } from '../../types';

interface RepositoryListContainerProps {
  repositories: Repository[];
}

const RepositoryListContainer: React.FC<RepositoryListContainerProps> = ({ repositories }) => {
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

export default RepositoryListContainer;
