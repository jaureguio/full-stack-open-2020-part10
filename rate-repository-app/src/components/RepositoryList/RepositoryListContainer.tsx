import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

import RepositoryListItem from './RepositoryListItem';
import { Repository } from '../../types';

interface RepositoryListContainerProps {
  repositories: Repository[];
}

const RepositoryListContainer: React.FC<RepositoryListContainerProps> = ({ repositories }) => {
  const history = useHistory();
  
  return (
    <FlatList
      data={repositories}
      keyExtractor={repo => repo.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => history.push(`/${item.id}`)}>
          <View>
            <RepositoryListItem repoFromParent={item} id={item.id} />
          </View>
        </TouchableOpacity>
      )} 
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
