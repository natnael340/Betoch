import {View} from 'react-native';
import React from 'react';
import OnBoardOne from '../molecules/onBoardOne';
import OnBoardFooter from '../molecules/onBoardOneFooter';

type Props = {
  data: {
    title: string;
    info: string;
  };
  OnNext: () => void;
};
const OnboardOneFooterHeader = ({data, OnNext}: Props) => {
  return (
    <View className="flex-1 justify-between items-center">
      <OnBoardOne title={data.title} info={data.info} />
      <OnBoardFooter OnNext={OnNext} currentScreenIndex={1} />
    </View>
  );
};

export default OnboardOneFooterHeader;
