import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black} from '../../assets/colors';
import Title from '../atoms/authTitle';

type Props = {
  title: string;
  goBack?: () => void;
};
const authHeader = ({title, goBack}: Props) => {
  return (
    <View className="justify-center items-center w-full ">
      {goBack ? (
        <TouchableOpacity onPress={goBack} className="absolute left-0 top-0">
          <FontAwesome name="angle-left" size={24} color={black} />
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <Title title={title} />
    </View>
  );
};

export default authHeader;
