import {FlatList} from 'react-native';
import React from 'react';
import RoundedImage from '../atoms/roundedImg';
type Props = {
  imgs: any[];
};
const scrollableImg = ({imgs}: Props) => {
  return (
    <FlatList
      horizontal
      data={imgs}
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      className="my-5"
      renderItem={({item}) => <RoundedImage img={item} />}
    />
  );
};

export default scrollableImg;
