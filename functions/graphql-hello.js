const {ApolloServer, gql} = require('apollo-server-lambda')
const faunadb = require('faunadb'),
q = faunadb.query;

const typeDefs = gql`
type user {
    name: String,
    age: Int
}

type Query {
    User : user,
    msg : String
}

type Mutation {
    adddata(title: String) : String
}
`;


const resolvers = {
    Query : {
        msg : async() => {
            console.log('Connecting to fauna')
            try{
                console.log('Connecting to fauna')
                var client = new faunadb.Client({secret: 'fnAD8k-3RiACB8K1iVEw5OgNm-JRLgWZHOuYAd7v'})
                let res = await client.query(
                    q.Get(q.Ref(q.Collection('posts'), '284561364268090887'))
                )
                return res.data.title
            }
            catch(err){
                err.toString()
            }
        },
    },
    Mutation:{
        adddata: (_,title) => {
            console.log('TITLE RECIEVED',title)
            return('DOne')
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
})

exports.handler = server.createHandler()