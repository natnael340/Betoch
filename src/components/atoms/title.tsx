import {Text} from 'react-native';
import React from 'react';

type Props = {
  color: string;
};
const title = ({color}: Props) => {
  return <Text className={`uppercase text-lg text-[${color}]`}>Betoch</Text>;
};

export default title;
