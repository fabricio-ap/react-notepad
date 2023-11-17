import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '~/reducer/filter';
import { RootState } from '~/store';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { Actions, Logo, Title, Wrapper } from './styles';

interface HeaderProps {
  onToggleTheme: () => void;
}

export function Header({ onToggleTheme }: HeaderProps) {
  const { search } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (value: string) => dispatch(setSearch(value));

  return (
    <Wrapper>
      <Logo>
        <Icon name='logo' size='20px' />
        <Title>Notepad</Title>
      </Logo>

      <Input.Root>
        <Icon name='search' size='20px' />
        <Input.TextInput value={search} placeholder='Pesquisar' onChange={handleChange} />
      </Input.Root>

      <Actions>
        <Icon name='themeMode' size='20px' onClick={onToggleTheme} />
      </Actions>
    </Wrapper>
  );
}