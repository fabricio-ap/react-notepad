import { ChangeEvent } from 'react';
import { Input } from './styles';

interface TextInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function TextInput({ value, placeholder, onChange }: TextInputProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(target.value);

  // {icon && <Icon name={icon} />}
  return <Input type='text' value={value} placeholder={placeholder} onChange={handleChange} />;
}
