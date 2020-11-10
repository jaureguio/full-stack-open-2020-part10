import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryListItem from './RepositoryListItem';

import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList: React.FC = () => {
  const { repositories } = useRepositories([]);

  return (
    <FlatList
      data={repositories}
      keyExtractor={repo => repo.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryListItem repo={item} />} />
  );
};

export default RepositoryList;
