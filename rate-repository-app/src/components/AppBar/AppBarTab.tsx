import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, TextStyle, StyleProp } from 'react-native';

import Text from '../utilities/Text';
import { AppBarTabProps } from '../../types';
import theme from '../../utils/theme';

const AppBarTab: React.FC<AppBarTabProps> = ({
  isActive,
  style,
  ...props
}) => {
  const appBarTabStyles: StyleProp<TextStyle> = [
    styles.text,
    isActive && styles.active,
    style
  ];

  return (
    <TouchableWithoutFeedback>
      <Text 
        style={appBarTabStyles}
        {...props}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.appBar.textPrimary,
    padding: 8
  },
  active: {
    textDecorationLine: 'underline'
  }
});

export default AppBarTab;