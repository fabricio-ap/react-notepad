import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8px;
  padding-left: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.onBackground};
  color: ${({ theme }) => theme.primary};
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: none;
  background: transparent;

  &:focus-visible {
    outline: none;
  }
`;
