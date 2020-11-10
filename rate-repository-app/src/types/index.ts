import { StyleProp, TextStyle, TextInputProps as NativeTextInputProps } from 'react-native';
import { MutationFunction, MutationResult } from '@apollo/react-hooks';

export interface Repository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

export interface RepositoryItemProps {
  repo: Repository;
}

export type RepositoryStatsProps = Record<'stars' | 'forks' | 'reviews' | 'ratingAvg', number>; 

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

/**
 *
 *  HOOKS
 * 
 */

/* useRepositories */

export interface UseRepositoriesResult {
  repositories: Repository[];
  loading: boolean;
  refetch: () => void;
}

export interface UseRepositories {
  (initVal?: Repository[]): UseRepositoriesResult;
}

/* useSignIn */

export interface Credentials {
  username: string;
  password: string;
}

export type UseSignInHook = () => [(cred: Credentials) => ReturnType<MutationFunction>, MutationResult];

/**
 * 
 * GRAPHQL
 *  
 */

/* QUERIES */

export interface PagedRepositories {
  repositories: {
    edges: { node: Repository }[]
  }
}

/* MUTATIONS */

export interface AuthorizedUserInfo {
  authorize: {
    accessToken: string;
  }
}