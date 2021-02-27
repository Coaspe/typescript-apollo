import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api', // running GraphQl server
    cache: new InMemoryCache()
});

export default client;