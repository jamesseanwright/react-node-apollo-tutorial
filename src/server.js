import { ApolloServer, gql } from 'apollo-server';
import { messages, users } from './dataStores';

const DEFAULT_AVATAR_URL = 'http://localhost:4001/images/default-avatar.jpg';

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

  type Mutation {
    addUser(name: String!, avatarUrl: String): User
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

  Mutation: {
    addUser: (parent, { name, avatarUrl = DEFAULT_AVATAR_URL }) =>
      users.add({ name, avatarUrl }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server available at ${url}!`);
});
