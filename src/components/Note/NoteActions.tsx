import { Icon } from '../Icon';
import { Footer, FooterItem } from './styles';

interface NoteActionsProps {
  onDelete?: () => void;
}

export function NoteActions({ onDelete }: NoteActionsProps) {
  return (
    <Footer>
      <FooterItem>
        <Icon name='edit' />
      </FooterItem>
      <FooterItem>
        <Icon name='remove' onClick={onDelete} />
      </FooterItem>
    </Footer>
  );
}
