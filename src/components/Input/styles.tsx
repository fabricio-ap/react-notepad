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
  gap: 16px;
  padding: 0 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
`;

export const TextInput = styled.input`
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

export const AreaInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  max-height: 320px;
  padding: 8px 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  resize: none;

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
