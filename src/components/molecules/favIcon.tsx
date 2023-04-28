import {TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {primary} from '../../assets/colors';

type Props = {
  selected: boolean;
  toggleSelection: (s: boolean) => void;
};
const favIcon = ({selected, toggleSelection}: Props) => {
  return (
    <TouchableOpacity onPress={() => toggleSelection(!selected)}>
      <FontAwesome
        name={selected ? 'heart' : 'heart-o'}
        color={primary}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default favIcon;
