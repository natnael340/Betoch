import {View, Text} from 'react-native';
import React from 'react';
import ItemImg from '../atoms/itemImg';
import {black, primary} from '../../assets/colors';
import FavIcon from '../molecules/favIcon';
import ResidenceLocaiton from '../molecules/residenceLocation';
import Rating from '../molecules/rating';
import {items as itemsType} from '../pages/Home';
import Facility from '../molecules/facility';
type Props = {
  item: itemsType;
};
const Item = ({item}: Props) => {
  return (
    <View
      className="border flex-row rounded-2xl"
      style={{borderColor: primary}}>
      <ItemImg img={null} />
      <View className="px-3 py-1 flex-1 justify-between">
        <View>
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold text-base" style={{color: black}}>
              {item.title}
            </Text>
            <FavIcon selected={item.fav} toggleSelection={() => null} />
          </View>
          <ResidenceLocaiton residence={item.location} />
          <Rating value={item.rating} max={5} />
        </View>
        <View className="flex-row justify-between w-full">
          <Text className="font-bold text-base" style={{color: black}}>
            ${item.price.toLocaleString('en-us')}
          </Text>
          <View className="flex-row space-x-2">
            {item.facilities.map((facility, index) => (
              <View key={index}>
                <Facility name={facility.name} amount={facility.amount} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;
