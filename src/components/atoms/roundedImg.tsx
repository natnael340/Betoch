import React from 'react';
import {Image} from 'react-native';

type Props = {
  img: any;
};
const roundedImg = ({img}: Props) => {
  return <Image className="rounded-xl w-80 mx-5" source={img} />;
};

export default roundedImg;
