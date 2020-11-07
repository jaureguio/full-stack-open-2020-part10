import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary,
  },
});

const AppBar: React.FC = () => (
  <View style={styles.container}>
    <AppBarTab isActive>Repositories</AppBarTab>
  </View>
);

export default AppBar;