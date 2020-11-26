import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useLocation, useHistory } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import useAuth from '../../hooks/useAuth';

import AppBarTab from './AppBarTab';

import Constants from 'expo-constants';
import theme from '../../utils/theme';
import { AUTHORIZED_USER } from '../../graphql/queries';
import { AuthorizedUser } from '../../types';

const AppBar: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const authStorage = useAuth();
  const apolloClient = useApolloClient();
  const { data } = useQuery<AuthorizedUser>(AUTHORIZED_USER);

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/');
  };

  const signInOut = data?.authorizedUser
    ? (
      <>
        <Link to='/newreview' component={AppBarTab} isActive={pathname === '/newreview'}>Create a review</Link>
        <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
      </>
    ) : (
      <>
        <Link to='/signin' component={AppBarTab} isActive={pathname === '/signin'}>Sign in</Link>
        <Link to='/signup' component={AppBarTab} isActive={pathname === '/signup'}>Sign up</Link>
      </>
    );

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/' component={AppBarTab} isActive={pathname === '/'}>Repositories</Link>
        {signInOut}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary,
  },
});

export default AppBar;