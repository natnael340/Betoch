import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {primary} from '../../assets/colors';

type Props = {
  onClose: () => void;
};
const close = ({onClose}: Props) => {
  return (
    <FontAwesome name="close" size={16} color={primary} onPress={onClose} />
  );
};

export default close;
