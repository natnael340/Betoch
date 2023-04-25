import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {primary} from '../../assets/colors';

type Props = {
  value: string;
  onPress: () => void;
};
const button = ({value, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full h-11 rounded-lg justify-center items-center my-5"
      style={{backgroundColor: primary}}>
      <Text className="text-white font-semibold">{value}</Text>
    </TouchableOpacity>
  );
};

export default button;
