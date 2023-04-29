import {View, Text} from 'react-native';
import React from 'react';
import DashedLine from 'react-native-dashed-line';
import {black, grey} from '../../assets/colors';
import ReviewItem from '../molecules/reviewItem';

type Props = {
  reviews:
    | {
        username: string;
        comment: string;
      }[]
    | [];
};
const Reviews = ({reviews}: Props) => {
  return (
    <View>
      <Text className="text-base mb-1" style={{color: black}}>
        Reviews
      </Text>
      <DashedLine dashLength={5} dashThickness={1} dashColor={grey} />
      <View className="space-y-3 py-3">
        {reviews.map((item, index: number) => (
          <View key={index}>
            <ReviewItem name={item.username} comment={item.comment} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reviews;
