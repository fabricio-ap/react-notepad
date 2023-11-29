import styled from 'styled-components';

type WrapperType = {
  $fullWidth?: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  box-sizing: border-box;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '280px')};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 0 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 8px 0;
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

export const Area = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  padding: 8px 0;
  resize: none;
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
