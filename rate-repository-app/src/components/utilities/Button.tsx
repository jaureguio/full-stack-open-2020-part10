import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, TextStyle, ViewStyle, GestureResponderEvent } from 'react-native';
import { TextStyleKeys } from '../../types';

import Text from './Text';

interface ButtonProps extends TextStyleKeys {
  onPress(e: GestureResponderEvent): void;
  customStyles?: Record<string, TextStyle | ViewStyle>
}

const Button: React.FC<ButtonProps> = ({ onPress, customStyles, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[buttonStyles.container, customStyles?.container]}>
        <Text style={[buttonStyles.text, customStyles?.text]} {...props} />
      </View>
    </TouchableWithoutFeedback>  
  );
};

const buttonStyles = StyleSheet.create({
  container: {

  },
  text: {
    color: 'white',
    textAlign: 'center',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  }
});

export default Button;