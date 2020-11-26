import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Text from '../utilities/Text';
import theme from '../../utils/theme';

const GitHubLink: React.FC<GitHubLinkProps> = ({ repositoryUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={() => WebBrowser.openBrowserAsync(repositoryUrl)}>
      <View style={[styles.sectionContainer, styles.buttonContainer]}>
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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

type GitHubLinkProps = Record<'repositoryUrl', string>;

export default GitHubLink;
