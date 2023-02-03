import {View} from 'react-native';
import React from 'react';
import SearchImage from '../atoms/searchImage';
import OnBoardOne from '../molecules/onBoardOne';
import OnBoardFooter from '../molecules/onBoardOneFooter';

const OnboardOneFooterHeader = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <SearchImage />
      <OnBoardOne />
      <OnBoardFooter />
    </View>
  );
};

export default OnboardOneFooterHeader;
