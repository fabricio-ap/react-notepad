import styled from 'styled-components';

type Icon = {
  $size: string;
};

export const Wrapper = styled.span<Icon>`
  width: ${({ $size }) => $size};
  height: fit-content;
  display: flex;
`;
