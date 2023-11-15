import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 82px);
  margin-top: 82px;
  padding: 20px 40px;
  box-sizing: border-box;
  overflow-y: scroll;
  background: ${({ theme }) => theme.background};
`;
