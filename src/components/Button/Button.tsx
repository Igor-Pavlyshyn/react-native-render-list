import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../styles/theme';
import {Text} from '../Custom';

interface Props {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  buttonStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.2,
  },
});
