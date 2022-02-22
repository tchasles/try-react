import '../styles/globals.css'
import client from "./api/client";
import {ApolloProvider} from "@apollo/client";
import ClientOnly from "../components/ClientOnly";

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
        <ClientOnly>
            <Component {...pageProps} />
        </ClientOnly>
    </ApolloProvider>
  )
}

export default MyApp
