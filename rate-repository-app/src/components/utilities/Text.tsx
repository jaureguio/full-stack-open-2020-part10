import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import { BaseProps, TextStyleKeys } from '../../types';
import theme from '../../utils/theme';

interface TextProps extends BaseProps, TextStyleKeys {}

const Text: React.FC<TextProps> = ({ color, backgroundColor, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    baseStyles.text,
    color === 'textSecondary' && baseStyles.colorTextSecondary,
    color === 'primary' && baseStyles.colorPrimary,
    backgroundColor === 'primary' && baseStyles.backgroundPrimary,
    fontSize === 'subheading' && baseStyles.fontSizeSubheading,
    fontWeight === 'bold' && baseStyles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

const baseStyles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  backgroundPrimary: {
    backgroundColor: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

export default Text;