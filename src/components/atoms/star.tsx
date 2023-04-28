import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {gold, grey} from '../../assets/colors';
import {View} from 'react-native';
type Props = {
  starType?: 'full' | 'half' | '';
};
const star = ({starType}: Props) => {
  const [name, color] =
    starType === undefined || starType === ''
      ? ['star-o', grey]
      : starType === 'full'
      ? ['star', gold]
      : ['star-half-full', gold];
  return (
    <View className="mr-1">
      <FontAwesome name={name} color={color} size={12} />
    </View>
  );
};

export default star;
