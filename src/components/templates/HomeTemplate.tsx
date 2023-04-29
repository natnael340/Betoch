import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import HomeHeader from '../organisms/HomeHeader';
import OnboardTwoTopHeader from '../organisms/OnboardTwoTopHeader';
import Item from '../organisms/Item';
import {items as itemsType} from '../pages/Home';
import SearchResult from '../molecules/searchResult';
type Props = {
  location: string;
  items: itemsType[];
  onSelectItem: (id: number) => void;
};
const HomeTemplate = ({location, items, onSelectItem}: Props) => {
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
          <TouchableOpacity key={item.id} onPress={() => onSelectItem(item.id)}>
            <Item item={item} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeTemplate;
