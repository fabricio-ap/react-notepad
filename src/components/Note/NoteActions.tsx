import { Icon } from '../Icon';
import { Footer, FooterItem } from './styles';

export function NoteActions() {
  return (
    <Footer>
      <FooterItem>
        <Icon name='edit' />
      </FooterItem>
      <FooterItem>
        <Icon name='remove' />
      </FooterItem>
    </Footer>
  );
}
