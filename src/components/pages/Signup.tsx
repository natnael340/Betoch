import React, {useState} from 'react';
import Container from '../atoms/Container';
import SignupTemplate from '../templates/SignupTemplate';
import OnboardTwoTopHeader from '../organisms/OnboardTwoTopHeader';
import FormBody from '../organisms/FormBody';
import OauthFooter from '../organisms/OauthFooter';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/Stack';
import {useNavigation} from '@react-navigation/native';

export type AuthForm = {
  name: string;
  value: string;
  inputType?: 'numeric' | 'email-address';
  showPassword?: boolean;
}[];
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;
const Signup = () => {
  const [authForm, setAuthForm] = useState<AuthForm>([
    {name: 'Name', value: ''},
    {name: 'Email', value: '', inputType: 'email-address'},
    {name: 'Password', value: '', showPassword: false},
    {name: 'Confirm Password', value: '', showPassword: false},
  ]);

  const navigation = useNavigation<NavigationProp>();

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
    <Container flex={1}>
      <SignupTemplate
        Header={OnboardTwoTopHeader}
        Body={
          <FormBody
            fields={authForm}
            onChange={OnChangeForm}
            submitText="Signup"
            onSubmit={() => console.log('submitted')}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        }
        Footer={
          <OauthFooter
            alternativeText="Aleready have an account?"
            alertnativeButtonText="Login"
            alertnativeButtonOnPress={() => navigation.navigate('Login')}
          />
        }
      />
    </Container>
  );
};

export default Signup;
