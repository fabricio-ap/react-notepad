import { useDispatch } from 'react-redux';
import { Button } from '~/components';
import { setNote } from '~/reducer/note';
import { Form } from './Form';
import { Wrapper } from './styles';

export function Notes() {
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(setNote());

  return (
    <Wrapper>
      <Button label='Criar nota anotação' onClick={handleOpen} size='12px' />
      <Form />
    </Wrapper>
  );
}
