import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const List = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.div`
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 240px;
  }
`;
