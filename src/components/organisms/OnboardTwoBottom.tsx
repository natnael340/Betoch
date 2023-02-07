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
};

const OnboardTwoBottom = ({data, OnNext}: Props) => {
  return (
    <View className="flex-1 justify-between m-0 p-0">
      <OnBoard title={data.title} info={data.info} />
      <OnBoardFooter OnNext={OnNext} />
    </View>
  );
};

export default OnboardTwoBottom;
