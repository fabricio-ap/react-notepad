import styled from 'styled-components';

type ListItemProps = {
  $isDragging: boolean;
};

export const ListItem = styled.div<ListItemProps>`
  width: 100%;
  border-radius: 8px;
  transform-origin: none;
  transform: scale(1);
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  border: 1px solid ${({ theme }) => theme.onPrimary};
  transition: 100ms box-shadow ease-in-out;

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
  }

  @media screen and (min-width: 480px) {
    width: 240px;
  }
`;
