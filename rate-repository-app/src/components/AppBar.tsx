import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';

import AppBarTab from './AppBarTab';

import Constants from 'expo-constants';
import theme from '../utils/theme';
import useAuth from '../hooks/useAuth';
import { AUTHORIZED_USER } from '../graphql/queries';
import { AuthorizedUser } from '../types';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary,
  },
});

const AppBar: React.FC = () => {
  const { data } = useQuery<AuthorizedUser>(AUTHORIZED_USER);
  const authStorage = useAuth();
  const { pathname } = useLocation();
  const apolloClient = useApolloClient();

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  const singInOut = data && data.authorizedUser
    ? <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
    : <Link to='/signin' component={AppBarTab} isActive={pathname === '/signin'}>Sign in</Link>;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/' component={AppBarTab} isActive={pathname === '/'}>Repositories</Link>
        {singInOut}
      </ScrollView>
    </View>
  );
};

export default AppBar;