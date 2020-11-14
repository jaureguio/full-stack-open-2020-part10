import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import theme from '../utils/theme';

import AppBar from './AppBar/AppBar';
import RepositoryList from './RepositoryList/'; 
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
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;