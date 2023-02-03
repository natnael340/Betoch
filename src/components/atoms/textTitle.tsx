import {Text} from 'react-native';
import React from 'react';
import {primary} from '../../assets/colors';

type Props = {
  text: string;
};
const TextTitle = ({text}: Props) => {
  return (
    <Text className="font-bold text-2xl my-2" style={{color: primary}}>
      {text}
    </Text>
  );
};

export default TextTitle;
