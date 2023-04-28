import {View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Label from '../atoms/label';
type Props = {
  residence: string;
};
const residenceLocation = ({residence}: Props) => {
  return (
    <View className="flex-row items-center">
      <View className="mr-1">
        <FontAwesome name="map-marker" size={14} color="#ABABAB" />
      </View>

      <Label>{residence}</Label>
    </View>
  );
};

export default residenceLocation;
