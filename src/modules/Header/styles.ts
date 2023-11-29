import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 82px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.span`
  width: 22px;
  height: fit-content;
  display: flex;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 1px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Actions = styled(Logo)`
  flex: 1;
  justify-content: flex-end;
`;
