import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};
const forgotPasswordLink = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Forgot Password?</Text>
    </TouchableOpacity>
  );
};

export default forgotPasswordLink;
