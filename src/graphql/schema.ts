import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Property {
    id: ID!
    title: String!
    description: String!
    price: Float!
    location: String!
    bedrooms: Int!
    bathrooms: Float!
    squareFeet: Int!
    imageUrl: String
    features: [String!]!
    available: Boolean!
    createdAt: String!
    updatedAt: String!
    owner: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String
    role: UserRole!
    favoriteProperties: [Property!]!
    createdAt: String!
  }

  enum UserRole {
    RENTER
    OWNER
    ADMIN
  }

  type Query {
    properties(
      location: String
      minPrice: Float
      maxPrice: Float
      bedrooms: Int
      limit: Int
      offset: Int
    ): [Property!]!
    property(id: ID!): Property
    featuredProperties: [Property!]!
    myProperties: [Property!]!
    myFavorites: [Property!]!
    me: User
  }

  type Mutation {
    createProperty(input: PropertyInput!): Property!
    updateProperty(id: ID!, input: PropertyInput!): Property!
    deleteProperty(id: ID!): Boolean!
    addToFavorites(propertyId: ID!): Boolean!
    removeFromFavorites(propertyId: ID!): Boolean!
    register(input: RegisterInput!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }

  input PropertyInput {
    title: String!
    description: String!
    price: Float!
    location: String!
    bedrooms: Int!
    bathrooms: Float!
    squareFeet: Int!
    imageUrl: String
    features: [String!]!
    available: Boolean!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
    phone: String
    role: UserRole!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;