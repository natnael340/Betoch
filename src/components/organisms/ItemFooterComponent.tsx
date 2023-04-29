import {View, Text} from 'react-native';
import React from 'react';
import {black} from '../../assets/colors';
import Facility from '../molecules/facility';

type Props = {
  price: number;
  facilities:
    | {
        name: 'bath' | 'car' | 'bed';
        amount: number;
      }[]
    | [];
};
const ItemFooterComponent = ({price, facilities}: Props) => {
  return (
    <View className="flex-row justify-between w-full">
      <Text className="font-bold text-base" style={{color: black}}>
        ${price.toLocaleString('en-us')}
      </Text>
      <View className="flex-row space-x-2">
        {facilities.map((facility, index) => (
          <View key={index}>
            <Facility name={facility.name} amount={facility.amount} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ItemFooterComponent;
