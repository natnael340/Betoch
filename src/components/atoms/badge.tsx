import {View, Text} from 'react-native';
import React from 'react';
import {primary} from '../../assets/colors';

type Props = {
  children?: string | number;
};
const badge = ({children}: Props) => {
  return (
    <View
      className="h-5 w-5 items-center justify-center rounded-full"
      style={{backgroundColor: primary}}>
      <Text className="text-white">{children}</Text>
    </View>
  );
};

export default badge;
