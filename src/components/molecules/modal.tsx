import {View} from 'react-native';
import React from 'react';
import Modal from '../atoms/modal';
import Overlay from '../atoms/overlay';
type Props = {
  visible: boolean;
  toggleVisibility: () => void;
  children: JSX.Element;
};
const modal = ({visible, children, toggleVisibility}: Props) => {
  return (
    <Modal visible={visible}>
      <View className="flex-1 justify-end">
        <Overlay onPress={toggleVisibility} />
        {children}
      </View>
    </Modal>
  );
};

export default modal;
