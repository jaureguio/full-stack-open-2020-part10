import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import theme from '../utils/theme';

import AppBar from './AppBar/AppBar';
import RepositoryList from './RepositoryList'; 
import SingleRepository from './RepositoryList/SingleRepository';
import ReviewForm from './ReviewForm';
import SignIn from './SignInForm';
import SignUp from './SignUpForm';

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
        <Route exact path='/signup'>
          <SignUp/>
        </Route>
        <Route exact path='/newreview'>
          <ReviewForm />
        </Route>
        <Route path='/:id'>
          <SingleRepository />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;