import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  @media screen and (min-width: 480px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
