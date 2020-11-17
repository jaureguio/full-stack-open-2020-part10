import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useLazyQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-native';

import Text from '../utilities/Text';
import RepositoryView from './RepositoryView';

import theme from '../../utils/theme';
import { Repository } from '../../types';
import { SINGLE_REPO } from '../../graphql/queries';

interface RepositoryItemProps {
  repoFromParent?: Repository;
  repoId?: string;
  singleView?: boolean;
}

interface SingleRepoData {
  repository: {
    id: string;
    fullName: string;
    description: string;
    language: string;
    ownerAvatarUrl: string;
    stargazersCount: number;
    forksCount: number;
    reviewCount: number;
    ratingAverage: number;
    url: string;
  }
}

const RepositoryListItem: React.FC<RepositoryItemProps> = ({ repoFromParent = {}, repoId = '', singleView = false }) => {
  const [repoData, setRepoData] = useState<Repository>(repoFromParent as Repository);
  const [getRepoData, { data, loading }] = useLazyQuery<SingleRepoData, { id: string }>(SINGLE_REPO);
  const { id: idFromParams } = useParams<{ id: string }>();

  useEffect(() => {
    if(!Object.keys(repoFromParent).length) {
      getRepoData({ variables: { id: repoId || idFromParams }});
    }
    if(data && data.repository) {
      setRepoData(data?.repository);
    }
  }, [data?.repository]);

  if(loading) return <Text>...Loading</Text>;

  return repoData && (
    <View style={styles.mainContainer}>
      <RepositoryView data={repoData} />
      {singleView && (
        <TouchableWithoutFeedback onPress={() => WebBrowser.openBrowserAsync(repoData.url)}>
          <View style={[styles.sectionContainer, styles.buttonContainer]}>
            <Text style={styles.buttonText}>Open in GitHub</Text>
          </View>
      </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    margin: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
});

export default RepositoryListItem;