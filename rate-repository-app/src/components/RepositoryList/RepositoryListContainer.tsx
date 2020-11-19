import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import RepositoryView from '../RepositoryView';
import { Repository } from '../../types';

interface RepositoryListContainerProps {
  repositories?: Repository[];
}

const RepositoryListContainer: React.FC<RepositoryListContainerProps> = ({ repositories }) => {
  const history = useHistory();
  
  return (
    <FlatList
      data={repositories}
      keyExtractor={repo => repo.id}
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
