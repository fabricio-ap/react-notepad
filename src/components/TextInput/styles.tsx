import styled from 'styled-components';

type WrapperType = {
  $fullWidth?: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  box-sizing: border-box;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '280px')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-left: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
  }

  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`;
