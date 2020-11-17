import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import theme from '../utils/theme';

import AppBar from './AppBar/AppBar';
import RepositoryList from './RepositoryList'; 
import RepositoryListItem from './RepositoryList/RepositoryListItem';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route exact path='/'>
          <RepositoryList />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route path='/:id'>
          <RepositoryListItem singleView />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;