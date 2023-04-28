import React from 'react';
import SavedTemplate from '../templates/SavedTemplate';
import {items} from './Home';

const Saved = () => {
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
  return <SavedTemplate title="Saved" items={data} />;
};

export default Saved;
