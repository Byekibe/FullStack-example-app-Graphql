import { gql } from 'graphql-tag';

const typeDefs = gql`

type Query {
    tracksForHome: [Track!]!
}
"A Track is a group of modules that teaches about a certain topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

type Author {
    id: ID!
    name: String!
    photo: String
}

`;

export { typeDefs };