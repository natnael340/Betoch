import {Image} from 'react-native';
import React from 'react';

const convImage = () => {
  return (
    <Image source={require('../../assets/conv.png')} className="w-72 h-72" />
  );
};

export default convImage;
