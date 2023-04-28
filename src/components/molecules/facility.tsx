import {View, Text} from 'react-native';
import React from 'react';
import FacilityIcon from '../atoms/facilityicon';

type Props = {
  name: 'bath' | 'car' | 'bed';
  amount: number;
};
const facility = ({name, amount}: Props) => {
  return name ? (
    <View className="justify-center flex-row items-center px-2 bg-blue-100 rounded-xl">
      <FacilityIcon name={name} />
      <Text className="ml-1">{amount}</Text>
    </View>
  ) : (
    <></>
  );
};

export default facility;
