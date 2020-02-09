import { ApolloServer, gql } from 'apollo-server';
import { messages, users } from './dataStores';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    avatarUrl: String!
  }

  type Message {
    id: ID!
    userId: ID!
    date: String! # TODO: add Date scalar
    contents: String!
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    messages(userID: ID): [Message]!
  }
`;


