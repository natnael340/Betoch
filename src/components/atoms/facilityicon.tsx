import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black} from '../../assets/colors';
type Props = {
  name: 'bath' | 'car' | 'bed';
};
const facilityicon = ({name}: Props) => {
  return name ? <FontAwesome name={name} size={12} color={black} /> : <></>;
};

export default facilityicon;
