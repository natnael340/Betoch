import {Image} from 'react-native';
import React from 'react';

const searchImage = () => {
  return (
    <Image
      source={require('../../assets/homesearch.png')}
      className="w-52 h-52"
    />
  );
};

export default searchImage;
