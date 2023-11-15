import { StyledButton } from './styles';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}
