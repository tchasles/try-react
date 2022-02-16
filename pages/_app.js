import '../styles/globals.css'
import client from "./api/client";
import {ApolloProvider} from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
