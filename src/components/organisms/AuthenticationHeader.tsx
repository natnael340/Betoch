import {View} from 'react-native';
import React from 'react';

import {light} from '../../assets/colors';
import AuthHeader from '../molecules/authHeader';

type Props = {
  title: string;
  goBack: () => void;
};
const AuthenticationHeader = ({title, goBack}: Props) => {
  return (
    <View
      className="flex-row mt-5 py-5 px-5 border-b"
      style={{borderColor: light}}>
      <AuthHeader title={title} goBack={goBack} />
    </View>
  );
};

export default AuthenticationHeader;
