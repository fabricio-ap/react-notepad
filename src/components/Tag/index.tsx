import { Label, Wrapper } from './styles';

interface TagProps {
  label: string;
  onClick?: () => void;
}

export function Tag({ label, onClick }: TagProps) {
  return (
    <Wrapper onClick={onClick} $hasClick={!!onClick}>
      <Label>{label}</Label>
    </Wrapper>
  );
}
