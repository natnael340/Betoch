import {View} from 'react-native';
import React from 'react';
import WaveLeft from '../molecules/waveLeft';
import Title from '../molecules/title';
import WaveTopRight from '../molecules/waveTopRight';

const OnboadOneTopHeader = () => {
  return (
    <View className="flex-1 justify-center px-2">
      <WaveLeft />
      <WaveTopRight />
      <Title />
    </View>
  );
};

export default OnboadOneTopHeader;
