import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';

import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  }
});

export function Main(): React.ReactElement {
  console.log('LOGGIN FROM MAIN');
  return (
    <View style={styles.container}>
      <AppBar/>
      <RepositoryList />
    </View>
  );
}