import { ChangeEvent } from 'react';
import { InputType } from '.';
import { Input } from './styles';

export function TextInput({ value, placeholder, onChange }: InputType) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(target.value);

  return <Input value={value} placeholder={placeholder} onChange={handleChange} />;
}
