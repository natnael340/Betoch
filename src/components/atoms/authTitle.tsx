import {Text} from 'react-native';
import React from 'react';
import {black} from '../../assets/colors';

type Props = {
  title: string;
};
const authTitle = ({title}: Props) => {
  return (
    <Text className="font-semibold text-base" style={{color: black}}>
      {title}
    </Text>
  );
};

export default authTitle;
