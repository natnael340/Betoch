import {Text} from 'react-native';
import React from 'react';

type Props = {
  text: string;
};
const textInfo = ({text}: Props) => {
  return <Text className="text-sm text-gray-400 text-center">{text}</Text>;
};

export default textInfo;
