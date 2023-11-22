import { ReactNode } from 'react';
import { Footer, FooterItem } from './styles';

export type NoteActionType = {
  label: string;
  render?: ReactNode;
  align?: 'right' | 'left';
  onClick?: () => void;
};

interface NoteActionsProps {
  config: NoteActionType[];
}

export function NoteActions({ config }: NoteActionsProps) {
  const leftAction = config.filter(({ align }) => align === 'left');
  const rightAction = config.filter(({ align }) => align === 'right');

  return (
    <Footer data-testid='note-actions'>
      <div>
        {leftAction.map(({ label, render, onClick }, index) => (
          <FooterItem key={index} onClick={onClick}>
            {render || label}
          </FooterItem>
        ))}
      </div>
      <div>
        {rightAction.map(({ label, render, onClick }, index) => (
          <FooterItem key={index} onClick={onClick}>
            {render || label}
          </FooterItem>
        ))}
      </div>
    </Footer>
  );
}
