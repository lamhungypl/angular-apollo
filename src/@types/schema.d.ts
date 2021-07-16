export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  book: Book;
  users: Array<User>;
  posts: PostConnection;
};

export type QueryUsersArgs = {
  info: ArgUserInfo;
};

export type QueryPostsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  orderBy?: Maybe<PostOrder>;
};

export type Book = {
  __typename?: 'Book';
  title: Scalars['String'];
  author: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  user_id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  post_id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
};

export type ArgUserInfo = {
  email?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  edges: Array<PostEdge>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  node?: Maybe<Post>;
  /** Used in `before` and `after` args */
  cursor?: Maybe<Scalars['String']>;
};

export type PostOrder = {
  updated_at: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  login: AuthResponse;
  register: User;
  updateUser: User;
  deleteUser: User;
  addPost: Post;
  updatePost: Post;
  deletePost: Post;
};

export type MutationChangePasswordArgs = {
  changePassInput: ChangePasswordInput;
};

export type MutationLoginArgs = {
  payload: LoginInput;
};

export type MutationRegisterArgs = {
  payload: RegisterInput;
};

export type MutationUpdateUserArgs = {
  payload: UpdateInput;
  userId: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};

export type MutationAddPostArgs = {
  payload: AddPostInput;
};

export type MutationUpdatePostArgs = {
  payload: UpdatePostInput;
  postId: Scalars['String'];
};

export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};

export type ChangePasswordInput = {
  username: Scalars['String'];
  currentPass: Scalars['String'];
  newPass: Scalars['String'];
  confirmPass: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UpdateInput = {
  email?: Maybe<Scalars['String']>;
};

export type AddPostInput = {
  post_id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  author_id?: Maybe<Scalars['ID']>;
};
