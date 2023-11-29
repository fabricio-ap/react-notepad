import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  margin-top: 82px;
  padding: 20px 40px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.background};

  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    'filter'
    'note'
    'list';

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      'filter note note note'
      'filter list list list'
      'filter list list list';
  }
`;
