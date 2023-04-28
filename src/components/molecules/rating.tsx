import {Text, View} from 'react-native';
import React from 'react';
import Star from '../atoms/star';
import {darkblue} from '../../assets/colors';
type Props = {
  value: number;
  max?: number;
};
const rating = ({value, max}: Props) => {
  return (
    <View className="flex-row w-52  items-center">
      {Array(max || 5)
        .fill(1)
        .map((_: number, i: number) => {
          if (value - i >= 1) {
            return <Star starType="full" key={i} />;
          } else if (value - i === 0.5) {
            return <Star starType="half" key={i} />;
          } else {
            return <Star key={i} />;
          }
        })}
      <Text style={{color: darkblue}}>{value}</Text>
    </View>
  );
};

export default rating;
