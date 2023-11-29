import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 16px;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
`;

export const Section = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  box-sizing: border-box;
`;
