import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
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
            <RepositoryListItem repositoryFromParent={item} repositoryId={item.id} />
          </View>
        </TouchableOpacity>
      )} 
    />
  );
};

const ItemSeparator = () => <View style={{ height: 10 }} />;

export default RepositoryListContainer;
