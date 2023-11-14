import { Icon } from '../Icon';
import { Footer, FooterItem, Header, Text, Title, Wrapper } from './styles';

interface CardProps {
  title: string;
  content: string;
}

export function Card({ title, content }: CardProps) {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {/* <div>Action</div> */}
      </Header>

      <Text>{content}</Text>

      <Footer>
        <FooterItem>
          <Icon name='edit' />
        </FooterItem>
        <FooterItem>
          <Icon name='remove' />
        </FooterItem>
      </Footer>
    </Wrapper>
  );
}
