import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import createApolloClient from './src/utils/createApolloClient';

import Main from './src/components/Main';

/* eslint-disable */
const apolloClient = createApolloClient();

const App: React.FC = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient} >
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;