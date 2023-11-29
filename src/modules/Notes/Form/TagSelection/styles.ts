import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  word-wrap: nowrap;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;
