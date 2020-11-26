import { Dispatch, SetStateAction } from 'react';
import { StyleProp, TextStyle, TextInputProps as NativeTextInputProps, GestureResponderEvent } from 'react-native';

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

interface PageInfo {
  endCursor: string;
  startCursor: string;
  totalCount: number;
  hasNextPage: boolean;
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
  reviews: {
    edges: {
      node: Review;
      cursor?: string;
    }[]
    pageInfo: PageInfo
  }
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
  onPress?: (e: GestureResponderEvent) => void;
}

export interface TouchableNativeHandleSubmit {
  handleSubmit: ((e: GestureResponderEvent) => void | undefined)
}

export interface RepositoryListContainerProps {
  repositories?: Repository[];
  loading: boolean;
  setSortingCriteria: Dispatch<SetStateAction<string>>;
  sorting: string;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  onEndReached: (info: { distanceFromEnd: number }) => void
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
  handleFetchMore: () => void;
}

/* useSingleRepository */

/* useSignIn */


/**
 * 
 * GRAPHQL
 *  
 */

/* QUERIES */

export interface RepositoriesQueryResult {
  repositories: {
    edges: {
      node: Repository;
      cursor?: string;
    }[]
    pageInfo: PageInfo
  }
}

export interface AuthorizedUser { 
  authorizedUser: {
    reviews: {
      edges: {
        node: Review;
        cursor?: string;
      }[]
      pageInfo: PageInfo
    }
  }
}

/* MUTATIONS */

export interface AuthorizedUserInfo {
  authorize: {
    accessToken: string;
  }
}