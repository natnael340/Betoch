import {View} from 'react-native';
import React from 'react';
import AuthenticationHeader from '../organisms/AuthenticationHeader';
import {items as itemsType} from '../pages/Home';
import Item from '../organisms/Item';

type Props = {
  title: string;
  items: itemsType[];
};
const SavedTemplate = ({title, items}: Props) => {
  return (
    <View>
      <AuthenticationHeader title={title} />
      <View className="m-5">
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default SavedTemplate;
