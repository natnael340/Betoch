import {View, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black, darkgrey} from '../../assets/colors';
import Card from '../atoms/card';

type Props = {
  name: string;
  comment: string;
};
const reviewItem = ({name, comment}: Props) => {
  return (
    <Card>
      <View className="justify-start items-start">
        <View className="py-1 px-2 items-center flex-row bg-teal-100 w-fit space-x-1 rounded-md">
          <FontAwesome name="user-circle-o" size={12} color={black} />
          <Text style={{color: black}}>{name}</Text>
        </View>
      </View>

      <Text style={{color: darkgrey}}>{comment}</Text>
    </Card>
  );
};

export default reviewItem;
