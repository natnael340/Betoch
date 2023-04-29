import {View, Text} from 'react-native';
import React from 'react';
import Card from '../atoms/card';
import {black} from '../../assets/colors';
const bookComponenets = () => {
  return (
    <View className="flex-row justify-between">
      <Card style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text className="font-semibold text-base" style={{color: black}}>
          Contact
        </Text>
      </Card>
      <Card style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text
          className="font-semibold text-base w-20 text-center"
          style={{color: black}}>
          Book
        </Text>
      </Card>
      <Card style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text className="font-semibold text-base" style={{color: black}}>
          Tour
        </Text>
      </Card>
    </View>
  );
};

export default bookComponenets;
