import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {primary, white} from '../../assets/colors';

const search = () => {
  return (
    <View
      className="flex-row h-14 w-full border rounded-md my-5"
      style={{borderColor: primary}}>
      <View className="w-14 justify-center items-center rounded-md">
        <FontAwesome name="search" size={24} color={primary} />
      </View>
      <TextInput className="flex-1" />
      <TouchableOpacity
        className="w-14 justify-center items-center rounded-md"
        style={{backgroundColor: primary}}>
        <FontAwesome name="filter" size={24} color={white} />
      </TouchableOpacity>
    </View>
  );
};

export default search;
