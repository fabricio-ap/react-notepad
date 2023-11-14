import { ChangeEvent } from 'react';
import { Icon } from '../Icon';
import { Input, Wrapper } from './styles';

interface TextInputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function TextInput({ value, placeholder, onChange }: TextInputProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => onChange(target.value);

  return (
    <Wrapper>
      <Icon name='search' />
      <Input type='text' value={value} placeholder={placeholder} onChange={handleChange} />
    </Wrapper>
  );
}
