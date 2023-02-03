import {Text} from 'react-native';
import React from 'react';

type Props = {
  color?: string;
  children: string;
};
const text = ({color, children}: Props) => {
  return (
    <Text
      className="text-md text-center text-gray-400"
      style={color ? {color} : {}}>
      {children}
    </Text>
  );
};

export default text;
