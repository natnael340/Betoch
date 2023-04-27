import {View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/Stack';
import {AuthForm} from './Signup';
import AuthenticationTemplate from '../templates/AuthenticationTemplate';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PasswordReset'
>;
const PasswordReset = () => {
  const navigation = useNavigation<NavigationProp>();
  const [authForm, setAuthForm] = useState<AuthForm>([
    {
      name: 'New Password',
      value: '',
      showPassword: false,
    },
    {
      name: 'Confirm Password',
      value: '',
      showPassword: false,
    },
  ]);
  const OnChangeForm = (field: string, value: string) => {
    setAuthForm(
      authForm.map(form => (form.name === field ? {...form, value} : form)),
    );
  };
  const togglePasswordVisibility = (field: string) => {
    setAuthForm(
      authForm.map(form =>
        form.name === field
          ? {...form, showPassword: !form?.showPassword}
          : form,
      ),
    );
  };
  return (
    <View>
      <AuthenticationTemplate
        title="Password Reset"
        goBack={() => navigation.goBack()}
        forms={authForm}
        onChange={OnChangeForm}
        onSubmit={() => null}
        submitText="Continue"
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </View>
  );
};

export default PasswordReset;
