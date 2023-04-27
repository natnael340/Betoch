import {View} from 'react-native';
import React from 'react';
import {AuthForm} from '../pages/Signup';
import AuthenticationHeader from '../organisms/AuthenticationHeader';
import AuthenticationDetial from '../organisms/AuthenticationDetial';
import FormBody from '../organisms/FormBody';
import Link from '../molecules/link';

type Props = {
  title: string;
  authTitle?: string;
  authDescription?: string;
  onChange: (field: string, value: string) => void;
  linkText?: string;
  forms: AuthForm;
  submitText: string;
  goBack: () => void;
  onSubmit: () => void;
  togglePasswordVisibility?: (field: string) => void;
};
const AuthenticationTemplate = ({
  title,
  authTitle,
  authDescription,
  linkText,
  forms,
  submitText,
  goBack,
  onChange,
  onSubmit,
  togglePasswordVisibility,
}: Props) => {
  return (
    <View>
      <AuthenticationHeader title={title} goBack={goBack} />

      <View className="mx-5">
        {authTitle !== undefined && authDescription !== undefined ? (
          <AuthenticationDetial
            title={authTitle}
            description={authDescription}
          />
        ) : (
          <View className="h-10" />
        )}
        <FormBody
          fields={forms}
          onChange={onChange}
          onSubmit={onSubmit}
          submitText={submitText}
          additionalFormComponent={
            linkText ? <Link text={linkText} onPress={() => null} /> : <></>
          }
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </View>
    </View>
  );
};

export default AuthenticationTemplate;
