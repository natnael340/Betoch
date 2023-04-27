import {Text} from 'react-native';
import React from 'react';
import {black} from '../../assets/colors';

type Props = {
  children: string;
};
const tilteSm = ({children}: Props) => {
  return (
    <Text className="text-xl font-semibold" style={{color: black}}>
      {children}
    </Text>
  );
};

export default tilteSm;
