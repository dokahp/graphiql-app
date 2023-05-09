import { Button } from '@mui/material';
import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const schemaString = `
  type Query {
    user(id: ID!): User
  }
  
  type User {
    id: ID!
    name: String!
    age: Int
  }
`;

function Welcome() {
  return (
    <main>
      <h1>Welcome Page</h1>
      <Button sx={{ m: 2 }} variant="contained" href="/signup">
        Sign Up
      </Button>
      <Button sx={{ m: 2 }} variant="contained" href="signin">
        Sign In
      </Button>
    </main>
  );
}

export default Welcome;
