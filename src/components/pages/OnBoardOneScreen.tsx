import {View} from 'react-native';
import React from 'react';
import TopHeader from '../organisms/OnboadOneTopHeader';
import BottomHeader from '../organisms/OnboardOneFooterHeader';
import OnBoardOneTemplate from '../templates/OnBoardOneTemplate';

const OnBoardOneScreen = () => {
  return (
    <View className="flex-1">
      <OnBoardOneTemplate Top={TopHeader} Bottom={BottomHeader} />
    </View>
  );
};

export default OnBoardOneScreen;
