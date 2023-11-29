import { ReactNode } from 'react';
import { useComponentVisible } from '~/hooks/useComponentVisible';
import { Popup, Wrapper } from './styled';

interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
}

export function Popover({ children, content }: PopoverProps) {
  const { ref, show, setShow } = useComponentVisible<HTMLDivElement>();

  const handleClose = () => setShow(false);

  return (
    <Wrapper ref={ref}>
      {children}
      {show && <Popup>{content}</Popup>}
    </Wrapper>
  );
}
