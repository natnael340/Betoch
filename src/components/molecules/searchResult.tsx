import {View} from 'react-native';
import React from 'react';
import Label from '../atoms/label';
import DashedLine from 'react-native-dashed-line';
import {grey} from '../../assets/colors';

type Props = {
  result: number;
};
const searchResult = ({result}: Props) => {
  return (
    <View className="my-2 space-y-1">
      <Label>{`${result} Result` + (result > 1 ? 's' : '')}</Label>
      <DashedLine dashLength={5} dashColor={grey} dashThickness={1} />
    </View>
  );
};

export default searchResult;
