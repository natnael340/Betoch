import {View} from 'react-native';
import React from 'react';
import WaveTopCenterAtom from '../atoms/waveTopCenter';

const waveTopCenter = () => {
  return (
    <View className="absolute top-0 left-0 right-0 bottom-0">
      <WaveTopCenterAtom />
    </View>
  );
};

export default waveTopCenter;
