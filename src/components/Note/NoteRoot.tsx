import { ReactNode } from 'react';
import { NoteActions } from './NoteActions';
import { Content, Wrapper } from './styles';

export type NoteActionType = {
  render: () => ReactNode;
  align?: 'right' | 'left';
  onClick?: () => void;
};

interface NoteRootProps {
  children: ReactNode;
  actions: {
    render: () => ReactNode;
    align?: 'right' | 'left';
    onClick?: () => void;
  }[];
  onClick: () => void;
}

export function NoteRoot({ children, actions, onClick }: NoteRootProps) {
  return (
    <Wrapper>
      <Content onClick={onClick}>{children}</Content>
      <NoteActions config={actions} />
    </Wrapper>
  );
}
