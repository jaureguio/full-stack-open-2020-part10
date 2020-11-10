import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useLocation } from 'react-router-native';

import AppBarTab from './AppBarTab';

import Constants from 'expo-constants';
import theme from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary,
  },
});

const AppBar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/' component={AppBarTab} isActive={pathname === '/'}>Repositories</Link>
        <Link to='/signin' component={AppBarTab} isActive={pathname === '/signin'}>Sign in</Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;