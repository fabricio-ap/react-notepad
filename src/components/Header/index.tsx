import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '~/reducer/filter';
import { RootState } from '~/store';
import { Icon } from '../Icon';
import { TextInput } from '../TextInput';
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
        <Icon name='logo' size='22px' />
        <Title>Notepad</Title>
      </Logo>

      <TextInput value={search} placeholder='Pesquisar' onChange={handleChange} />

      <Actions>
        <Icon name='themeMode' size='22px' onClick={onToggleTheme} />
      </Actions>
    </Wrapper>
  );
}
