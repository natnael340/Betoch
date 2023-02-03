import {Text} from 'react-native';
import React from 'react';

type Props = {
  color: string;
  size: number;
};
const title = ({color, size}: Props) => {
  return (
    <Text
      className="uppercase text-5xl font-extrabold m-1"
      style={{color, fontSize: size}}>
      Betoch
    </Text>
  );
};

export default title;
