import {View} from 'react-native';
import React from 'react';
import WaveRight from '../molecules/waveRight';
import Title from '../molecules/title';
import {white} from '../../assets/colors';

const OnBoardThreeHeader = () => {
  return (
    <View className="flex-1 pt-20 pl-3">
      <WaveRight />
      <Title color={white} />
    </View>
  );
};

export default OnBoardThreeHeader;
