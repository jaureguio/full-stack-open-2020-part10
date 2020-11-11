/* eslint-disable */
import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './src/components/Main';

import createApolloClient from './src/utils/createApolloClient';
import AuthStorage from './src/utils/authStorage';
import { AuthProvider } from './src/contexts/AuthStorageContext'

const authStorage = new AuthStorage();

const apolloClient = createApolloClient(authStorage);

/* Unable to satisfy/understand ApolloProvider's client prop types requirements by the compiler */
const App: React.FC = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient} >
        <AuthProvider value={authStorage}>
          <Main />
        </AuthProvider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;