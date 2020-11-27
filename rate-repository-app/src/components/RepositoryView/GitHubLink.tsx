import React from 'react';
import { StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Button from '../utilities/Button';
import theme from '../../utils/theme';

const GitHubLink: React.FC<GitHubLinkProps> = ({ repositoryUrl }) => {
  const handlePress = () => WebBrowser.openBrowserAsync(repositoryUrl);

  return (
    <Button onPress={handlePress} customStyles={styles}>
      Open in GitHub
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    padding: 8,
    marginBottom: 8,
    marginHorizontal: 12
  },
  text: {
    fontWeight: theme.fontWeights.bold,
  }
});

type GitHubLinkProps = Record<'repositoryUrl', string>;

export default GitHubLink;
