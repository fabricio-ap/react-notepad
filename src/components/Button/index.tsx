import { ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { Label, StyledButton } from './styles';

interface ButtonProps {
  label?: string;
  icon?: ReactNode;
  color?: string;
  size?: string;
  onClick?: () => void;
}

export function Button({ label, icon, color, size = '14px', onClick }: ButtonProps) {
  const theme = useTheme();

  return (
    <StyledButton $bg={color || theme.primary} onClick={onClick}>
      {icon}
      {label && <Label $size={size}>{label}</Label>}
    </StyledButton>
  );
}
