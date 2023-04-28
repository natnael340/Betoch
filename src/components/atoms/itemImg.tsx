import {Image} from 'react-native';
import React from 'react';

type Props = {
  img: any;
};
const itemImg = ({img}: Props) => {
  const tempImg = require('../../assets/house.jpg');
  return <Image source={img || tempImg} className="h-24 w-24 rounded-l-xl" />;
};

export default itemImg;
