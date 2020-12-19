import React from "react"
import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const APOLLO_Query = gql`
  {
    msg
  }
`;

const addData = gql`
mutation AddData($title: String!){
  adddata(title: $title)
}
`

export default function Home() {
  
  const [adddata] = useMutation(addData)
  const { loading, error, data } = useQuery(APOLLO_Query)
  
  return <div>
  <h1> Data From ApolloClient </h1>
  {loading && <p> Loading message</p>}
  {error && <p> Error Loading </p>}
  {data && <div> {data.msg} </div>}
  {console.log('returned', data)}
  <div>
  <form onSubmit = {
    async (e) => {
      e.preventDefault()
      const ret = await adddata({variables: {title: 'Mastering Graphic Fauna'}})
      console.log("BUTTON PUSHED")
    } 
  } >
  <button type='submit'> Add </button>
  </form>
  </div>
  </div>

}