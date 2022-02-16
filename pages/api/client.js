
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink
} from "@apollo/client";

import fetch from 'cross-fetch';

const uri = process.env.NEXT_PUBLIC_API_URL;
const key = process.env.NEXT_PUBLIC_ACCOUNT_KEY;
const client = new ApolloClient({
  link: new HttpLink({uri: uri, headers: {"x-account-key": key}, fetch }),
  cache: new InMemoryCache()
});

export default client;