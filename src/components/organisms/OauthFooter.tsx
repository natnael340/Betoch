import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import OAuthComponent from '../molecules/oauthComponenet';
import Fb from '../atoms/fb';
import Google from '../atoms/google';
import {black, primary} from '../../assets/colors';

type Props = {
  alternativeText: string;
  alertnativeButtonText: string;
  alertnativeButtonOnPress: () => void;
};
const OauthFooter = ({
  alertnativeButtonOnPress,
  alertnativeButtonText,
  alternativeText,
}: Props) => {
  return (
    <View className="justify-between h-48">
      <View className="mx-10">
        <OAuthComponent text="Continue with Facebook" Icon={Fb} />
        <OAuthComponent text="Continue with Google" Icon={Google} />
      </View>
      <View className="w-full justify-center items-center flex-row py-4 bg-gray-200">
        <Text style={{color: black}}>{alternativeText}</Text>
        <TouchableOpacity onPress={alertnativeButtonOnPress} className="ml-1">
          <Text className="underline" style={{color: primary}}>
            {alertnativeButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OauthFooter;
