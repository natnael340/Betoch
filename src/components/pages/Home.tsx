import React from 'react';
import HomeTemplate from '../templates/HomeTemplate';
import {HomeStackParamList} from '../../navigators/HomeStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;
export type items = {
  id: number;
  title: string;
  type: 'sell' | 'rent';
  houseType: string;
  price: number;
  paymentPlan: string;
  location: string;
  rating: number;
  fav: boolean;
  img: any;
  facilities:
    | {
        name: 'bath' | 'car' | 'bed';
        amount: number;
      }[]
    | [];
};

const Home = () => {
  const navigation = useNavigation<NavigationProp>();

  const data: items[] = [
    {
      id: 1,
      title: 'Condominium - Studio',
      fav: false,
      houseType: 'condominium',
      type: 'sell',
      img: null,
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
    },
  ];

  const onSelectItem = (id: number) => {
    navigation.navigate('ResidenceDetail', {
      id,
    });
  };
  return (
    <HomeTemplate
      location="Addis Ababa, Jemo Michael"
      items={data}
      onSelectItem={onSelectItem}
    />
  );
};

export default Home;
