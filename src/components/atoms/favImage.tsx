import {Image} from 'react-native';
import React from 'react';

const favImage = () => {
  return (
    <Image source={require('../../assets/fav.png')} className="w-72 h-72" />
  );
};

export default favImage;
