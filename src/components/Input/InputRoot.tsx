import { ReactNode } from 'react';
import { Wrapper } from './styles';

interface InputRootProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export function InputRoot({ children, fullWidth }: InputRootProps) {
  return <Wrapper $fullWidth={fullWidth}>{children}</Wrapper>;
}
