import {View} from 'react-native';
import React from 'react';

type Props = {
  color: string;
};
const bullet = ({color}: Props) => {
  return (
    <View
      className="w-2 h-2 rounded-full mx-1"
      style={{backgroundColor: color}}
    />
  );
};

export default bullet;
