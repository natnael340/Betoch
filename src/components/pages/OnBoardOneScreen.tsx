import {View} from 'react-native';
import React from 'react';
import TopHeader from '../organisms/OnboadOneTopHeader';
import BottomHeader from '../organisms/OnboardOneFooterHeader';

const OnBoardOneScreen = () => {
  return (
    <View className="flex-1">
      <TopHeader />
      <BottomHeader />
    </View>
  );
};

export default OnBoardOneScreen;
