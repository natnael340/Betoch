import {Text, TouchableOpacity, TextStyle} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  onPress: () => void;
  textStyle?: TextStyle;
};
const forgotPasswordLink = ({text, textStyle, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default forgotPasswordLink;
