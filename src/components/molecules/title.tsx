import {View} from 'react-native';
import React from 'react';
import Logo from '../atoms/logo';
import Title from '../atoms/title';
import {white} from '../../assets/colors';

const title = () => {
  return (
    <View className="flex-row items-end">
      <Logo color={white} size={80} />
      <Title color={white} size={36} />
    </View>
  );
};

export default title;
