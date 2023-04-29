import {View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/Stack';
import {useNavigation} from '@react-navigation/native';
import AuthenticationTemplate from '../templates/AuthenticationTemplate';
import {AuthForm} from './Signup';
import Timer from '../atoms/timer';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TwoFA'>;

const TwoFA = () => {
  const navigation = useNavigation<NavigationProp>();
  const [initialValue, setInitialValue] = useState<number | undefined>();
  const [authForm, setAuthForm] = useState<AuthForm>([
    {
      name: 'Code',
      value: '',
      leftComponent: (
        <Timer
          initialValue={initialValue}
          resetInitialValue={() => setInitialValue(0)}
        />
      ),
    },
  ]);
  const OnChangeForm = (field: string, value: string) => {
    setAuthForm(
      authForm.map(form => (form.name === field ? {...form, value} : form)),
    );
  };
  return (
    <View>
      <AuthenticationTemplate
        title="Sign in"
        goBack={() => navigation.goBack()}
        forms={authForm}
        onChange={OnChangeForm}
        onSubmit={() =>
          navigation.navigate('App', {
            screen: 'Home',
            params: {screen: 'HomeScreen'},
          })
        }
        authTitle="Two Factor Authentication"
        authDescription="We’ve sent you a two factor authentication code to your email address abebexxxxxx@gmail.com "
        submitText="Continue"
        linkText="Resend code"
      />
    </View>
  );
};

export default TwoFA;
