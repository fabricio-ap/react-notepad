import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  grid-area: create;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;
