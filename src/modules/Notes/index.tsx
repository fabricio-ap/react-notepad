import { Edit } from './Edit';
import { List } from './List';
import { Wrapper } from './styles';

export function Notes() {
  return (
    <Wrapper>
      <List />

      <Edit />
    </Wrapper>
  );
}
