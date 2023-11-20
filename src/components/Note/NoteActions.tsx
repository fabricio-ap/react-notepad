import { ReactNode } from 'react';
import { Footer, FooterItem } from './styles';

interface NoteActionsProps {
  config: {
    render: () => ReactNode;
    align?: 'right' | 'left';
    onClick?: () => void;
  }[];
}

export function NoteActions({ config }: NoteActionsProps) {
  const leftAction = config.filter(({ align }) => align === 'left');
  const rightAction = config.filter(({ align }) => align === 'right');

  return (
    <Footer>
      <div>
        {leftAction.map(({ render, onClick }, index) => (
          <FooterItem key={index} onClick={onClick}>
            {render()}
          </FooterItem>
        ))}
      </div>
      <div>
        {rightAction.map(({ render, onClick }, index) => (
          <FooterItem key={index} onClick={onClick}>
            {render()}
          </FooterItem>
        ))}
      </div>
    </Footer>
  );
}
