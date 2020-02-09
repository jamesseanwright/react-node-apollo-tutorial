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
    messages(userId: ID): [Message]!
  }
`;

const resolvers = {
  Query: {
    users: () => users.getAll(),
    user: (parent, { id }) => users.findById(id),
    messages: (parent, { userId }) => userId
      ? messages.findByUserId(userId)
      : messages.getAll(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server available at ${url}!`);
});
