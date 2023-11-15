import { ChangeEvent } from 'react';
import { Icon } from '../Icon';
import { Input, Wrapper } from './styles';

interface TextInputProps {
  value?: string;
  placeholder: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export function TextInput({ value, placeholder, fullWidth, onChange }: TextInputProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(target.value);

  return (
    <Wrapper $fullWidth={fullWidth}>
      <Icon name='search' />
      <Input type='text' value={value} placeholder={placeholder} onChange={handleChange} />
    </Wrapper>
  );
}
