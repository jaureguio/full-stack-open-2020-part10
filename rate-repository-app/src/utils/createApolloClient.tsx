import ApolloClient from 'apollo-boost';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createApolloClient = (): any => new ApolloClient({  
  uri: 'http://192.168.1.112:5000/grapqhl'
});

export default createApolloClient;