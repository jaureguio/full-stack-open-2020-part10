import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-native';

import Text from '../utilities/Text';
import SingleRepository from './SingleRepository';

import { Repository } from '../../types';
import { SINGLE_REPO } from '../../graphql/queries';

interface RepositoryListItemProps {
  repositoryFromParent?: Repository;
  repositoryId?: string;
  singleView?: boolean;
}

type SingleRepositoryData = Record<'repository', Repository>;

const RepositoryListItem: React.FC<RepositoryListItemProps> = ({
  repositoryFromParent = {},
  repositoryId = '',
  singleView = false
}) => {
  const [repositoryData, setRepositoryData] = useState<Repository>(repositoryFromParent as Repository);
  const [getRepositoryData, { data, loading }] = useLazyQuery<SingleRepositoryData, { id: string }>(SINGLE_REPO);
  const { id: idFromParams } = useParams<{ id: string }>();

  const isDataAvailable = () => Object.keys(repositoryData).length;

  useEffect(() => {
    if(!isDataAvailable()) {
      getRepositoryData({ variables: { id: repositoryId || idFromParams }});
    }
    if(data && data.repository) {
      setRepositoryData(data.repository);
    }
  }, [data?.repository]);

  if(loading) return <Text>...Loading</Text>;

  return isDataAvailable()
    ? (
    <View style={!singleView && styles.mainContainer}>
      <SingleRepository repository={repositoryData} singleView={singleView} />
    </View>
    ) : null;
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  }
});

export default RepositoryListItem;