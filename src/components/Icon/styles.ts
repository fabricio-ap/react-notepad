import styled, { css } from 'styled-components';

type Icon = {
  $size: string;
  $hasClick: boolean;
};

export const Wrapper = styled.div<Icon>`
  width: ${({ $size }) => $size};
  height: fit-content;
  display: flex;

  ${({ $hasClick, theme }) =>
    $hasClick &&
    css`
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      transition: 0.1s background ease-in-out;

      &:hover {
        background: ${theme.primary};
      }
    `}
`;
