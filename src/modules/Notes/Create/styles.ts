import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;
