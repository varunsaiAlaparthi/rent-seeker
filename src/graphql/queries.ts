import { gql } from '@apollo/client';

export const GET_PROPERTIES = gql`
  query GetProperties(
    $location: String
    $minPrice: Float
    $maxPrice: Float
    $bedrooms: Int
    $limit: Int
    $offset: Int
  ) {
    properties(
      location: $location
      minPrice: $minPrice
      maxPrice: $maxPrice
      bedrooms: $bedrooms
      limit: $limit
      offset: $offset
    ) {
      id
      title
      description
      price
      location
      bedrooms
      bathrooms
      squareFeet
      imageUrl
      features
      available
      createdAt
      updatedAt
    }
  }
`;

export const GET_PROPERTY = gql`
  query GetProperty($id: ID!) {
    property(id: $id) {
      id
      title
      description
      price
      location
      bedrooms
      bathrooms
      squareFeet
      imageUrl
      features
      available
      createdAt
      updatedAt
      owner {
        id
        name
        email
        phone
      }
    }
  }
`;

export const GET_FEATURED_PROPERTIES = gql`
  query GetFeaturedProperties {
    featuredProperties {
      id
      title
      description
      price
      location
      bedrooms
      bathrooms
      squareFeet
      imageUrl
      features
      available
    }
  }
`;

export const GET_MY_PROPERTIES = gql`
  query GetMyProperties {
    myProperties {
      id
      title
      description
      price
      location
      bedrooms
      bathrooms
      squareFeet
      imageUrl
      features
      available
      createdAt
      updatedAt
    }
  }
`;

export const GET_MY_FAVORITES = gql`
  query GetMyFavorites {
    myFavorites {
      id
      title
      description
      price
      location
      bedrooms
      bathrooms
      squareFeet
      imageUrl
      features
      available
      createdAt
      updatedAt
    }
  }
`;

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