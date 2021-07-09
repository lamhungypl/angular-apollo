import { gql } from 'apollo-angular';
export const GET_USERS = gql`
  query getUsers {
    users(info: { email: "" }) {
      user_id
      username
      email
      posts {
        content
      }
    }
  }
`;
