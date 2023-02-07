import {View} from 'react-native';
import React from 'react';
import TextTitle from '../atoms/textTitle';
import TextInfo from '../atoms/textInfo';

type Props = {
  title: string;
  info: string;
};
const onBoardOne = ({title, info}: Props) => {
  return (
    <View className="items-center mx-10">
      <TextTitle text={title} />
      <TextInfo text={info} />
    </View>
  );
};

export default onBoardOne;
