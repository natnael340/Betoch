import {Image} from 'react-native';
import React from 'react';

const searchImage = () => {
  return (
    <Image
      source={require('../../assets/homesearch.png')}
      className="w-60 h-60"
    />
  );
};

export default searchImage;
