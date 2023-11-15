import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 8px 8px;
  border: 0.5px solid ${({ theme }) => theme.onPrimary};
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  transition: 50ms background ease-in;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;
