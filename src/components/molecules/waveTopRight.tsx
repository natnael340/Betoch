import {View} from 'react-native';
import React from 'react';
import WaveTopR from '../atoms/waveTopRight';

const waveTopRight = () => {
  return (
    <View className="absolute top-0 -right-3">
      <WaveTopR />
    </View>
  );
};

export default waveTopRight;
