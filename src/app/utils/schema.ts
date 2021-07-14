import { gql } from 'apollo-angular';
export const GET_USERS = gql`
  query getUsers($userInfo: ArgUserInfo!) {
    users(info: $userInfo) {
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

export const UPDATE_USER = gql`
  mutation updateUserInfo($payload: UpdateInput!, $userId: String!) {
    updateUser(payload: $payload, userId: $userId) {
      username
      email
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation userChangePassword($payload: ChangePasswordInput!) {
    changePassword(changePassInput: $payload) {
      username
      email
    }
  }
`;
