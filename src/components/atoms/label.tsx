import {Text} from 'react-native';
import React from 'react';

type Props = {
  children: string;
};
const label = ({children}: Props) => {
  return <Text className="text-gray-500 text-sm">{children}</Text>;
};

export default label;
