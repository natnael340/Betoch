import React from 'react';
import FloatingComponent from '../molecules/floatingComponent';
import BookComponenets from '../molecules/bookComponenets';

type Props = {
  toggleTourVisibility: () => void;
};
const BookComponent = ({toggleTourVisibility}: Props) => {
  return (
    <FloatingComponent
      position={{
        bottom: 5,
        left: 20,
        right: 20,
      }}>
      <BookComponenets toggleTourVisibility={toggleTourVisibility} />
    </FloatingComponent>
  );
};

export default BookComponent;
