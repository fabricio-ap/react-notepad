import { ReactNode } from 'react';
import { Actions, Close, Wrapper } from './styles';

interface NoteFormProps {
  children: ReactNode;
  onClose: () => void;
}

export function NoteForm({ children, onClose }: NoteFormProps) {
  return (
    <Wrapper>
      {children}

      <Actions>
        <div></div>

        <Close label='Fechar' onClick={onClose} />
      </Actions>
    </Wrapper>
  );
}
