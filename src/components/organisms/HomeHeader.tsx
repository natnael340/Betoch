import {View} from 'react-native';
import React from 'react';
import Location from '../molecules/location';
import SearchBar from '../molecules/search';

type Props = {
  location: string;
};
const HomeHeader = ({location}: Props) => {
  return (
    <View className="justify-evenly">
      <Location name={location} />
      <SearchBar />
    </View>
  );
};

export default HomeHeader;
