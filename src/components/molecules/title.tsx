import {View} from 'react-native';
import React from 'react';
import Logo from '../atoms/logo';
import Title from '../atoms/title';
import {white} from '../../assets/colors';

type Props = {
  color?: string;
};
const title = ({color}: Props) => {
  return (
    <View className="flex-row items-end">
      <Logo color={color || white} size={80} />
      <Title color={color || white} size={36} />
    </View>
  );
};

export default title;
