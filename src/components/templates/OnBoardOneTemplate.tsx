import {View} from 'react-native';
import React from 'react';

type Props = {
  Top: React.FunctionComponent;
  Bottom: React.FunctionComponent;
};
const OnBoardOneTemplate = ({Top, Bottom}: Props) => {
  return (
    <View>
      <Top />
      <Bottom />
    </View>
  );
};

export default OnBoardOneTemplate;
