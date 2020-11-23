import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import RepositoryView from '../RepositoryView';
import SortingMenu from './SortingMenu';

import { RepositoryListContainerProps } from '../../types';

const RepositoryListContainer: React.FC<RepositoryListContainerProps> = ({ repositories, setSortingCriteria, sorting }) => {
  const history = useHistory();
  
  return (
    <FlatList
      data={repositories}
      keyExtractor={repo => repo.id}
      ListHeaderComponent={() => <SortingMenu setSortingCriteria={setSortingCriteria} sorting={sorting} />}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item: repository }) => (
        <TouchableOpacity onPress={() => history.push(`/${repository.id}`)}>
          <View style={styles.mainContainer}>
            <RepositoryView repository={repository} />
          </View>
        </TouchableOpacity>
      )} 
    />
  );
};

const ItemSeparator = () => <View style={{ height: 10 }} />;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  }
});

export default RepositoryListContainer;
