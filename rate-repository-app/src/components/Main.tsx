import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import theme from '../utils/theme';

import AppBar from './AppBar/AppBar';
import RepositoryList from './RepositoryList'; 
import SingleRepository from './RepositoryList/SingleRepository';
import ReviewForm from './ReviewForm';
import SignIn from './SignInForm';
import SignUp from './SignUpForm';
import UserReviews from './UserReviews/indext';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route exact path='/' component={RepositoryList} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/newreview' component={ReviewForm} />
        <Route path='/myreviews' component={UserReviews} />
        <Route path='/:id' component={SingleRepository} />
      </Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  }
});

export default Main;