import {View, Image} from 'react-native';
import React from 'react';
import OnlineStatus from '../atoms/onlineStatus';
type Props = {
  img: any;
  online?: boolean;
};
const messagePro = ({img, online}: Props) => {
  const defaultImg = require('../../assets/pro.png');
  return (
    <View className="w-14 h-16 justify-center">
      <Image className="w-14 h-14" source={img || defaultImg} />
      <View className="absolute bottom-0 right-3">
        <OnlineStatus online={online} />
      </View>
    </View>
  );
};

export default messagePro;
