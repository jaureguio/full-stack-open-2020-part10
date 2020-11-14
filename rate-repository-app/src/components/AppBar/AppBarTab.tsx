import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, TextStyle, StyleProp } from 'react-native';
import Text from '../Text';

import { AppBarTabProps } from '../../types';
import theme from '../../utils/theme';

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
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('tab pressed!');
      }}
    >
      <Text 
        style={appBarTabStyles}
        {...props}
      />
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;