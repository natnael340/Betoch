import {View} from 'react-native';
import React from 'react';
import HomeHeader from '../organisms/HomeHeader';
import OnboardTwoTopHeader from '../organisms/OnboardTwoTopHeader';
import Item from '../organisms/Item';
import {items as itemsType} from '../pages/Home';
import SearchResult from '../molecules/searchResult';
type Props = {
  location: string;
  items: itemsType[];
};
const HomeTemplate = ({location, items}: Props) => {
  return (
    <View className="flex-1 ">
      <View className="h-40">
        <OnboardTwoTopHeader />
      </View>
      <View className="px-5 pt-5">
        <HomeHeader location={location} />
      </View>
      <View className="flex-1 px-5">
        <SearchResult result={items.length} />
        <View className="h-1 w-full" />
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default HomeTemplate;
