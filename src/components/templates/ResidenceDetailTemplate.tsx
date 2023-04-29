import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {itemDetail} from '../pages/ResidenceDetail';
import ScrollableImage from '../molecules/scrollableImg';
import ItemDescription from '../organisms/ItemDescription';
import ItemFooterComponent from '../organisms/ItemFooterComponent';
import AuthenticationHeader from '../organisms/AuthenticationHeader';
import Reviews from '../organisms/Reviews';
import BookComponent from '../organisms/BookComponent';
import BookTour from '../organisms/BookTour';

type Props = {
  item: itemDetail;
  goBack: () => void;
  tourForm: {
    name: string;
    value: string;
  }[];
  onChange: (field: string, value: string) => void;
  visible: boolean;
  toggleVisibility: () => void;
  onRequestTour: () => void;
};
const ResidenceDetailTemplate = ({
  item,
  goBack,
  tourForm,
  onChange,
  visible,
  toggleVisibility,
  onRequestTour,
}: Props) => {
  return (
    <View className="flex-1">
      <BookTour
        fields={tourForm}
        onChange={onChange}
        visible={visible}
        toggleVisibility={toggleVisibility}
        onSubmit={onRequestTour}
      />
      <AuthenticationHeader title={item.title} goBack={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollableImage imgs={item.imgs} />
        <View className="mx-5 space-y-2 mb-10">
          <ItemDescription
            title={item.title}
            fav={item.fav}
            location={item.location}
            rating={item.rating}
          />
          <View>
            <ItemFooterComponent
              facilities={item.facilities}
              price={item.price}
            />
          </View>
          <Text numberOfLines={10}>{item.description}</Text>
          <View>
            <Reviews reviews={item.reviews} />
          </View>
        </View>
      </ScrollView>
      <BookComponent toggleTourVisibility={toggleVisibility} />
    </View>
  );
};

export default ResidenceDetailTemplate;
