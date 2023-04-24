import {View} from 'react-native';
import React from 'react';
import Bullet from '../atoms/bullet';
import {secondary, secondaryPassive} from '../../assets/colors';

type Props = {
  active: number;
};
const onBoardLoading = ({active}: Props) => {
  console.log(active);
  return (
    <View className="flex-row">
      <Bullet color={active === 1 ? secondary : secondaryPassive} />
      <Bullet color={active === 2 ? secondary : secondaryPassive} />
      <Bullet color={active === 3 ? secondary : secondaryPassive} />
    </View>
  );
};

export default onBoardLoading;
