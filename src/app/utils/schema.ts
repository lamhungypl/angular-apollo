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

export const LOGIN = gql`
  mutation userLogin($params: LoginInput!) {
    login(payload: $params) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const REGISTER = gql`
  mutation userRegister($payload: RegisterInput!) {
    register(payload: $payload) {
      username
      email
      created_at
    }
  }
`;
