import { useDispatch, useSelector } from 'react-redux';
import { Icon, Input } from '~/components';
import { setSearch } from '~/reducer/filter';
import { RootState } from '~/store';
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

      <Input value={search} placeholder='Pesquisar' icon='search' onChange={handleChange} />

      <Actions>
        <Icon name='themeMode' size='20px' onClick={onToggleTheme} />
      </Actions>
    </Wrapper>
  );
}
