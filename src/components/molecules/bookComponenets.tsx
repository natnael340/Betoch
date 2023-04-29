import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Card from '../atoms/card';
import {black} from '../../assets/colors';

type Props = {
  toggleTourVisibility: () => void;
};
const bookComponenets = ({toggleTourVisibility}: Props) => {
  return (
    <View className="flex-row justify-between">
      <TouchableOpacity>
        <Card style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text className="font-semibold text-base" style={{color: black}}>
            Contact
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            className="font-semibold text-base w-20 text-center"
            style={{color: black}}>
            Book
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTourVisibility}>
        <Card style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text className="font-semibold text-base" style={{color: black}}>
            Tour
          </Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default bookComponenets;
