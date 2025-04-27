import { gql } from '@apollo/client';

export const ADD_TO_FAVORITES = gql`
  mutation AddToFavorites($propertyId: ID!) {
    addToFavorites(propertyId: $propertyId)
  }
`;

export const REMOVE_FROM_FAVORITES = gql`
  mutation RemoveFromFavorites($propertyId: ID!) {
    removeFromFavorites(propertyId: $propertyId)
  }
`;
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;


// (You can later add more mutations here if needed)
