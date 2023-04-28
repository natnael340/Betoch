import {View, Text} from 'react-native';
import React from 'react';
import Label from '../atoms/label';
import {black} from '../../assets/colors';

type Props = {
  name: string;
};
const location = ({name}: Props) => {
  return (
    <View className="w-1/2">
      <Label>Current Location</Label>
      <Text className="text-xl font-bold" style={{color: black}}>
        {name}
      </Text>
    </View>
  );
};

export default location;
