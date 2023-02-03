import {View} from 'react-native';
import React from 'react';
import WaveLeft from '../atoms/waveLeft';
const waveLeft = () => {
  return (
    <View className="absolute top-0 left-0 bottom-0 right-0">
      <WaveLeft />
    </View>
  );
};

export default waveLeft;
