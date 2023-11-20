import { useEffect, useRef, useState } from 'react';
import { Input } from '~/components';
import { Group } from './Group';
import { Container, Wrapper } from './styles';

export function Create() {
  const ref = useRef<HTMLInputElement>(null);

  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('click', showContent);

    return () => {
      document.removeEventListener('click', showContent);
    };
  });

  const showContent = ({ target }: Event) => {
    if (ref.current && ref.current.contains(target as HTMLElement)) return setShowAll(true);
    setShowAll(false);
  };

  return (
    <Wrapper>
      <Container ref={ref}>
        {!showAll && <Input placeholder='Criar uma nota...' fullWidth />}

        {showAll && <Group changeView={setShowAll} />}
      </Container>
    </Wrapper>
  );
}
