import {View} from 'react-native';
import React from 'react';
import TextTitle from '../atoms/textTitle';
import TextInfo from '../atoms/textInfo';

const onBoardOne = () => {
  return (
    <View className="items-center mx-10">
      <TextTitle text="Find a Cozy Home" />
      <TextInfo text="Use search and filter functions and find good matches based in your needs" />
    </View>
  );
};

export default onBoardOne;
