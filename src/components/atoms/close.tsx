import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  onClose: () => void;
  color: string;
};
const close = ({onClose, color}: Props) => {
  return <FontAwesome name="close" size={16} color={color} onPress={onClose} />;
};

export default close;
