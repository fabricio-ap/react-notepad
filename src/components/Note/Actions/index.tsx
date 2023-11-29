import { NoteActionType } from '..';
import { Footer, FooterItem } from '../styles';

interface NoteActionsProps {
  config: NoteActionType[];
}

export function NoteActions({ config }: NoteActionsProps) {
  return (
    <Footer data-testid='note-actions'>
      {config.map(({ label, render, onClick }, index) => (
        <FooterItem key={index} onClick={onClick}>
          {render || label}
        </FooterItem>
      ))}
    </Footer>
  );
}
