import { Icon } from '../Icon';
import { Layout } from '../Layout';
import { Title, Wrapper } from './styles';

export function Header() {
  return (
    <Layout>
      <Wrapper>
        <Icon name='logo' size='22px' />
        <Title>Notepad</Title>
      </Wrapper>
    </Layout>
  );
}
