import styled from 'styled-components';

type ButtonType = {
  $bg: string;
};

type LabelType = {
  $size: string;
};

export const StyledButton = styled.button<ButtonType>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px;
  border: none;
  background: ${({ $bg }) => $bg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  transition: 50ms background ease-in;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

export const Label = styled.span<LabelType>`
  font-size: ${({ $size }) => $size};
`;
