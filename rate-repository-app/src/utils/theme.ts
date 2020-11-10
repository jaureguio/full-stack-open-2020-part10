import { Platform } from 'react-native';
import { Theme } from '../types';

const theme: Theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    secondary: '#a7a7a7',
    error: '#d73a4a',
    mainBackground: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  appBar: {
    primary: '#24292e',
    textPrimary: '#e1e4e8'
  }
};

export default theme;