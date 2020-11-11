/* eslint-disable */
import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';
import AuthStorage from './authStorage';

const createApolloClient = (authStorage: AuthStorage) => new ApolloClient({  
  uri: Constants.manifest.extra.apolloUrl as string,
  request: async (operation) => {
    try {
      const accessToken: string | null = await authStorage.getAccessToken();
      operation.setContext((prevContext: Record<string, any>) => {
        return {
          ...prevContext,
          headers: {
            ...prevContext.headers,
            authorization: accessToken ? `Bearer ${accessToken}` : null
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
});

export default createApolloClient;