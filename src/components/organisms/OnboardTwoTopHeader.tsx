import {View} from 'react-native';
import React from 'react';
import Title from '../molecules/title';
import WaveTopCenter from '../molecules/waveTopCenter';
import {primary} from '../../assets/colors';

const OnboardTwoTopHeader = () => {
  return (
    <View className="flex-1 justify-end items-center">
      <WaveTopCenter />
      <Title color={primary} />
    </View>
  );
};

export default OnboardTwoTopHeader;
