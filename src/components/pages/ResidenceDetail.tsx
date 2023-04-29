import React from 'react';
import ResidenceDetailTemplate from '../templates/ResidenceDetailTemplate';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigators/HomeStack';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'ResidenceDetail'
>;

export type itemDetail = {
  id: number;
  title: string;
  description: string;
  type: 'sell' | 'rent';
  houseType: string;
  price: number;
  paymentPlan: string;
  location: string;
  rating: number;
  fav: boolean;
  imgs: any[] | [];
  facilities:
    | {
        name: 'bath' | 'car' | 'bed';
        amount: number;
      }[]
    | [];
  reviews:
    | {
        username: string;
        comment: string;
      }[]
    | [];
};
const ResidenceDetail = () => {
  const navigation = useNavigation<NavigationProp>();

  const dataDetail: itemDetail = {
    id: 1,
    title: 'Condominium - Studio',
    fav: false,
    description:
      'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
    houseType: 'condominium',
    type: 'sell',
    imgs: [
      require('../../assets/house.jpg'),
      require('../../assets/house.jpg'),
    ],
    rating: 4.5,
    location: 'Jemo Michael, A.A',
    paymentPlan: 'onetime',
    price: 1200000,
    facilities: [
      {
        name: 'car',
        amount: 1,
      },
      {
        name: 'bed',
        amount: 2,
      },
    ],
    reviews: [
      {
        username: 'Abebe Tesfaye',
        comment:
          'Sorem ipsum dolor sit amet, sud elit. sorem ipsum dolor sit amet, sud elit. Sorem ipsum dolor sit amet, sud elit.',
      },
      {
        username: 'Abebe Tesfaye',
        comment:
          'Sorem ipsum dolor sit amet, sud elit. sorem ipsum dolor sit amet, sud elit. Sorem ipsum dolor sit amet, sud elit.',
      },
    ],
  };
  return (
    <ResidenceDetailTemplate
      item={dataDetail}
      goBack={() => navigation.goBack()}
    />
  );
};

export default ResidenceDetail;
