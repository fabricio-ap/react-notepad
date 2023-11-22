import { ReactNode } from 'react';
import { NoteActionType, NoteActions } from './NoteActions';
import { Content, Wrapper } from './styles';

interface NoteRootProps {
  children: ReactNode;
  actions?: NoteActionType[];
  onClick?: () => void;
}

export function NoteRoot({ children, actions, onClick }: NoteRootProps) {
  return (
    <Wrapper>
      <Content onClick={onClick}>{children}</Content>
      {actions?.length && <NoteActions config={actions} />}
    </Wrapper>
  );
}
