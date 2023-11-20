import { ReactNode } from 'react';
import { Icon } from '../Icon';
import { NoteActions } from './NoteActions';
import { Content, Wrapper } from './styles';

interface NoteRootProps {
  children: ReactNode;
  onClick: () => void;
}

export function NoteRoot({ children, onClick }: NoteRootProps) {
  const config: {
    render: () => ReactNode;
    align?: 'right' | 'left';
    onClick?: () => void;
  }[] = [
    {
      render: () => <Icon name='pin' />,
      align: 'left',
      onClick: () => console.log('fixar'),
    },
    {
      render: () => <Icon name='remove' />,
      align: 'right',
      onClick: () => console.log('remover'),
    },
  ];

  return (
    <Wrapper>
      <Content onClick={onClick}>{children}</Content>
      <NoteActions config={config} />
    </Wrapper>
  );
}
