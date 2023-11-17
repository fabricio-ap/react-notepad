import { ChangeEvent } from 'react';
import { AreaInput } from './styles';

interface TextAreaProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function TextArea({ value, placeholder, onChange }: TextAreaProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    onChange && onChange(target.value);

  return <AreaInput value={value} placeholder={placeholder} onChange={handleChange} />;
}
