import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  }
});

export function Main(): React.ReactElement {
  console.log('LOGGIN FROM MAIN');
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
}