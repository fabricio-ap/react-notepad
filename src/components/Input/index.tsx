import { Icon, config } from '../Icon';
import { TextArea } from './TextArea';
import { TextInput } from './TextInput';
import { Wrapper } from './styles';

export type InputType = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

interface InputProps extends InputType {
  type?: 'text' | 'textarea';
  icon?: keyof typeof config;
  fullWidth?: boolean;
}

export function Input({ type = 'text', icon, fullWidth, ...props }: InputProps) {
  const renderElement = () =>
    type === 'textarea' ? <TextArea {...props} /> : <TextInput {...props} />;

  return (
    <Wrapper $fullWidth={fullWidth} data-testid='input'>
      {icon && <Icon name={icon} size='14px' />}
      {renderElement()}
    </Wrapper>
  );
}
