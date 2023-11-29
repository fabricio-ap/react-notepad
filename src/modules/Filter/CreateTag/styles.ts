import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
