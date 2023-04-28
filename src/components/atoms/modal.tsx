import {Modal} from 'react-native';
import React from 'react';

type Props = {
  children: JSX.Element;
  visible: boolean;
};
const modal = ({children, visible}: Props) => {
  return (
    <Modal transparent visible={visible}>
      {children}
    </Modal>
  );
};

export default modal;
