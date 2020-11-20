import { StyleProp, TextStyle, TextInputProps as NativeTextInputProps, GestureResponderEvent } from 'react-native';
import { MutationResult, gql } from '@apollo/react-hooks';

import AuthStorage from '../utils/authStorage';

export interface Review {
  id: string;
  text: string;
  rating: number;
  createdAt: string;
  repositoryId: string;
  user: {
    username: string;
  }
}

export interface Repository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  ownerAvatarUrl: string;
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
  url: string;
  reviews?: Boilerplate<Review>
}

export interface Theme {
  colors: {
    textPrimary: string;
    textSecondary: string;
    primary: string;
    secondary: string;
    error: string,
    mainBackground: string;
  };
  fontSizes: Record<'body' | 'subheading', TextStyle['fontSize']>;
  fonts: {
    main: string;
  };
  fontWeights: Record<'normal' | 'bold', TextStyle['fontWeight']>;
  appBar: {
    primary: string;
    textPrimary: string;
  }
}

export interface BaseProps {
  style?: StyleProp<TextStyle>
}

export type TextStyleKeys = Partial<Record<keyof TextStyle, string>>;

export interface TextInputProps extends BaseProps, NativeTextInputProps {
  error?: string | false;
}

export interface FormikTextInputProps extends NativeTextInputProps {
  name: string;
}

export interface AppBarTabProps extends BaseProps {
  isActive?: boolean;
  onPress?: () => void;
}

export interface TouchableNativeHandleSubmit {
  handleSubmit: ((e: GestureResponderEvent) => void | undefined)
}

/**
 *
 *  CONTEXTS
 * 
 */

/* AuthStorageContext */

export interface AuthProviderProps {
  value: AuthStorage;
}

/**
 *
 *  HOOKS
 * 
 */

export interface Credentials {
  username: string;
  password: string;
}

export interface RepositoriesHookResult<T> {
  results: T | undefined;
  loading: boolean;
  refetch: () => void;
}

/* useSingleRepository */
export type UseSingleRepository = ( repositoryId: string ) => RepositoriesHookResult<Repository>;

/* useSignIn */


/**
 * 
 * GRAPHQL
 *  
 */

/* QUERIES */

interface Boilerplate<T> {
  edges: { node: T }[]
}

export interface RepositoriesQueryResult {
  repositories: Boilerplate<Repository>
}

export interface SingleRepositoryQueryResult {
  repository: Repository
}

export interface AuthorizedUser { 
  authorizedUser: {
    username: string;
  }
}

/* MUTATIONS */

export interface AuthorizedUserInfo {
  authorize: {
    accessToken: string;
  }
}