import {View, Text} from 'react-native';
import React from 'react';
import FavIcon from '../molecules/favIcon';
import ResidenceLocation from '../molecules/residenceLocation';
import Rating from '../molecules/rating';
import {black} from '../../assets/colors';

type Props = {
  title: string;
  fav: boolean;
  rating: number;
  location: string;
};
const ItemDescription = ({title, fav, rating, location}: Props) => {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold text-base" style={{color: black}}>
          {title}
        </Text>
        <FavIcon selected={fav} toggleSelection={() => null} />
      </View>
      <ResidenceLocation residence={location} />
      <Rating value={rating} max={5} />
    </View>
  );
};

export default ItemDescription;
