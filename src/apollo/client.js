import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink} from '@apollo/client'
// import { createHttpLink } from "apollo-link-http"

export const client = new ApolloClient({
    link: new HttpLink({
    uri: '/.netlify/functions/graphql-hello',
    fetch,
}),
cache: new InMemoryCache()
})