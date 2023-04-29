import {View, Text} from 'react-native';
import React from 'react';
import Card from '../atoms/card';
import Close from '../atoms/close';
import {black, primary, white} from '../../assets/colors';

type Props = {
  onClose: () => void;
  title?: string;
  children?: JSX.Element[] | JSX.Element;
};
const modalContent = ({onClose, title, children}: Props) => {
  return (
    <Card style={{paddingHorizontal: 30}}>
      <Text
        className="font-semibold text-lg text-center"
        style={{
          color: black,
        }}>
        {title}
      </Text>
      <View
        className="absolute right-2 top-5  w-6 h-6 rounded-full justify-center items-center"
        style={{backgroundColor: primary}}>
        <Close onClose={onClose} color={white} />
      </View>
      <View className="py-5">{children}</View>
    </Card>
  );
};

export default modalContent;
