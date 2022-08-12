import { gql } from "@apollo/client";

// Get the query
const GET_CLIENTS = gql`
  {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENTS };
