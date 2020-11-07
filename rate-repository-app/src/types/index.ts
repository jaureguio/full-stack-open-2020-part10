import { StyleProp, TextStyle } from 'react-native';

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

type TextStyleKeys = Partial<Record<keyof TextStyle, string>>;

export interface TextProps extends TextStyleKeys {
  style?: StyleProp<TextStyle>
}

export interface AppBarTabProps extends TextProps {
  isActive?: boolean;
  onPress?: () => void;
}