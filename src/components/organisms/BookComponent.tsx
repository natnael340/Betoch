import React from 'react';
import FloatingComponent from '../molecules/floatingComponent';
import BookComponenets from '../molecules/bookComponenets';

const BookComponent = () => {
  return (
    <FloatingComponent
      position={{
        bottom: 5,
        left: 20,
        right: 20,
      }}>
      <BookComponenets />
    </FloatingComponent>
  );
};

export default BookComponent;
