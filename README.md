# RentSeeker

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

A modern rental property search application built with **TypeScript**, **Next.js**, and **GraphQL**. RentSeeker lets users browse, favorite, and manage rental properties with a clean, responsive interface.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [GraphQL API](#graphql-api)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Property Listings**: Browse available rental properties with filtering by location, price range, and bedrooms.
- **Featured Properties**: Highlight special listings on the homepage.
- **Authentication**: Secure user login with JWT-based sessions.
- **Favorites**: Add or remove properties from your favorites list.
- **My Properties**: View and manage properties posted by the authenticated user.
- **Responsive Design**: Mobile-friendly UI using Tailwind CSS.
- **Type Safety**: Full TypeScript support for frontend and backend.

---

## Tech Stack

- **Next.js** (App Router) - React framework for hybrid SSR/SSG.
- **TypeScript** - Static typing for JavaScript.
- **Apollo Client** - GraphQL client for React hooks.
- **Apollo Server** + `@as-integrations/next` - GraphQL server inside Next.js API routes.
- **GraphQL** - Query language and runtime for the API.
- **Tailwind CSS** - Utility-first CSS framework.
- **Node.js** & **npm/yarn** - Backend runtime and package manager.

---

## Getting Started

### Prerequisites

- Node.js v16+ or higher
- npm v8+ or yarn v1/

### Installation

1. Clone the repository:
   ```bash
   git clone 
   cd rent-seeker
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```bash
NEXT_PUBLIC_GRAPHQL_URL=https://your-graphql-endpoint.com/graphql
GRAPHQL_SECRET=your_graphql_secret_token
JWT_SECRET=your_jwt_secret
```

### Running Locally

```bash
# Development mode
npm run dev
# or
yarn dev
```
- Open [http://localhost:3000](http://localhost:3000) to view in browser.

- GraphQL playground available at `/api/graphql`.

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── graphql/
│   │       └── route.ts
│   ├── dashboard/
│   │   └── page.tsx
│   ├── properties/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── post-property/
│   │   └── page.tsx
│   ├── favorites/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── Loading.tsx
│   │   └── SearchBar.tsx
│   ├── property/
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyDetails.tsx
│   │   ├── PropertyForm.tsx
│   │   ├── PropertyGrid.tsx
│   │   └── PropertyFilters.tsx
│   └── user/
│       ├── AuthForm.tsx
│       ├── ProfileCard.tsx
│       └── UserMenu.tsx
├── graphql/
│   ├── schema.ts
│   ├── resolvers.ts
│   └── types.ts
├── lib/
│   ├── apollo-client.ts
│   ├── auth.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    ├── images/
```

---

## Scripts

- `dev` - Run Next.js in development mode.
- `build` - Build the app for production.
- `start` - Start the production server.
- `lint` - Run ESLint.
- `format` - Format code with Prettier.

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

---

## GraphQL API

- **Endpoint:** `/api/graphql`
- **Queries:**
  - `properties` (filters: location, minPrice, maxPrice, bedrooms, limit, offset)
  - `property(id: ID!)`
  - `featuredProperties`
  - `myProperties`
  - `myFavorites`
- **Mutations:**
  - `login(email: String!, password: String!): LoginResponse`
  - `addToFavorites(propertyId: ID!)`
  - `removeFromFavorites(propertyId: ID!)`

Refer to `graphql/queries.ts` and `graphql/mutations.ts` for full details.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m "feat: description"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.

