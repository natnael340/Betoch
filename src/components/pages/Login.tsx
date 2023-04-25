import {View} from 'react-native';
import React, {useState} from 'react';
import {AuthForm} from './Signup';
import Container from '../atoms/Container';
import LoginTemplate from '../templates/LoginTemplate';
import OnBoardThreeHeader from '../organisms/OnBoardThreeHeader';
import FormBody from '../organisms/FormBody';
import OauthFooter from '../organisms/OauthFooter';
import ForgotPasswordLink from '../molecules/forgotPasswordLink';
const Login = () => {
  const [authForm, setAuthForm] = useState<AuthForm>([
    {name: 'Email', value: '', inputType: 'email-address'},
    {name: 'Password', value: '', showPassword: false},
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
    <Container flex={1}>
      <LoginTemplate
        Top={OnBoardThreeHeader}
        Body={
          <View>
            <FormBody
              fields={authForm}
              onChange={OnChangeForm}
              onSubmit={() => null}
              submitText="Login"
              togglePasswordVisibility={togglePasswordVisibility}
              additionalFormComponent={
                <ForgotPasswordLink onPress={() => null} />
              }
            />
          </View>
        }
        Footer={
          <OauthFooter
            alternativeText="Dont have an account?"
            alertnativeButtonText="Signup"
            alertnativeButtonOnPress={() => null}
          />
        }
      />
    </Container>
  );
};

export default Login;
