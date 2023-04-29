import React from 'react';
import TextInputWrapped from '../molecules/TextInputWrapped';
import Button from '../atoms/button';
type Props = {
  fields: {
    name: string;
    value: string;
    inputType?: 'numeric' | 'email-address';
    showPassword?: boolean;
    leftComponent?: JSX.Element;
  }[];
  onChange: (field: string, value: string) => void;
  onSubmit?: () => void;
  submitText?: string;
  togglePasswordVisibility?: (field: string) => void;
  additionalFormComponent?: JSX.Element;
};
const FormBody = ({
  fields,
  onChange,
  onSubmit,
  submitText,
  togglePasswordVisibility,
  additionalFormComponent,
}: Props) => {
  return (
    <>
      {fields.map((field, index) => (
        <TextInputWrapped
          key={index}
          label={field.name}
          value={field.value}
          onTextInput={t => onChange(field.name, t)}
          inputType={field?.inputType}
          showPassword={field.showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          leftComponent={field?.leftComponent}
        />
      ))}
      {additionalFormComponent}
      {onSubmit ? <Button value={submitText || ''} onPress={onSubmit} /> : null}
    </>
  );
};

export default FormBody;
