
const {ApolloServer, gql} = require('apollo-server-lambda')

const typeDefs = gql`
type strange {
    name : String
    age: Int
}
type Query {
    message: String,
    getUsr: strange
}
`;

const resolvers = {
Query: {
    message: () => "Hello from hassaan",
    getUsr: () => ({name:'Hassaan', age:30}),
    }
}
;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
})

exports.handler = server.createHandler()