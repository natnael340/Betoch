import {Text} from 'react-native';
import React from 'react';
import Modal from '../molecules/modal';
import ModalContent from '../molecules/modalContent';

type Props = {
  visible: boolean;
  toggleVisibility: () => void;
};
const filter = ({visible, toggleVisibility}: Props) => {
  return (
    <Modal visible={visible} toggleVisibility={toggleVisibility}>
      <ModalContent title="filter" onClose={toggleVisibility}>
        <Text>hey</Text>
      </ModalContent>
    </Modal>
  );
};

export default filter;
