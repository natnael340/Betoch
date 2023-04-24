import {View} from 'react-native';
import React from 'react';
import OnBoard from '../molecules/onBoardOne';
import OnBoardFooter from '../molecules/onBoardOneFooter';

type Props = {
  data: {
    title: string;
    info: string;
  };
  OnNext: () => void;
  currentScreenIndex: number;
};

const OnboardTwoBottom = ({data, OnNext, currentScreenIndex}: Props) => {
  console.log('here', currentScreenIndex);
  return (
    <View className="flex-1 justify-between m-0 p-0">
      <OnBoard title={data.title} info={data.info} />
      <OnBoardFooter OnNext={OnNext} currentScreenIndex={currentScreenIndex} />
    </View>
  );
};

export default OnboardTwoBottom;
