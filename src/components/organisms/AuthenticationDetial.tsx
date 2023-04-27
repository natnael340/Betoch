import {View} from 'react-native';
import React from 'react';
import Title from '../atoms/tilteSm';
import Label from '../atoms/label';

type Props = {
  title: string;
  description: string;
};
const AuthenticationDetial = ({title, description}: Props) => {
  return (
    <View className="w-full h-40 justify-evenly">
      <Title>{title}</Title>
      <Label>{description}</Label>
    </View>
  );
};

export default AuthenticationDetial;
