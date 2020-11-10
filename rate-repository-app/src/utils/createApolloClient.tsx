import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createApolloClient = (): any => new ApolloClient({  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  uri: Constants.manifest.extra.apolloUrl as string
});

export default createApolloClient;