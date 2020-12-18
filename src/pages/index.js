import React from "react"
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const APOLLO_Query = gql`
{
  message
  getUsr{
    name
    age
  }
}
`;

export default function Home() {
  const { loading, error, data } = useQuery(APOLLO_Query)
  
  return <div>
  <h1> Data From ApolloClient </h1>
  {loading && <p> Loading message</p>}
  {error && <p> Error Loading </p>}
  {data && 
    <div> 
    {data.message} 
    <div> {data.getUsr.name} {data.getUsr.age} </div>
    </div>}
  </div>
}
