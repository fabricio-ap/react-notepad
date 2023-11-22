import { ChangeEvent } from 'react';
import { InputType } from '.';
import { Area } from './styles';

export function TextArea({ value, placeholder, onChange }: InputType) {
  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    onChange && onChange(target.value);

  return <Area value={value} placeholder={placeholder} onChange={handleChange} />;
}
