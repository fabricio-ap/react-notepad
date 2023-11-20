import { ChangeEvent } from 'react';
import { Icon, config } from '../Icon';
import { AreaInput, TextInput, Wrapper } from './styles';

type InputType = {
  value?: string;
  placeholder?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
};

interface InputProps extends InputType {
  type?: 'text' | 'textarea';
  icon?: keyof typeof config;
}

export function Input({ type = 'text', icon, fullWidth, onChange, ...props }: InputProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange && onChange(target.value);

  const renderElement = () =>
    type === 'textarea' ? (
      <AreaInput {...props} onChange={handleChange} />
    ) : (
      <TextInput {...props} onChange={handleChange} />
    );

  return (
    <Wrapper $fullWidth={fullWidth}>
      {icon && <Icon name={icon} />}
      {renderElement()}
    </Wrapper>
  );
}
