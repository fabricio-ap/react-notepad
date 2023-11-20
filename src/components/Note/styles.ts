import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  padding-bottom: calc(8px + 42px);
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 12px;
  font-weight: 600;
`;

export const Text = styled.p`
  white-space: pre-wrap;
  font-size: 12px;
  line-height: 20px;
`;

export const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 16px;
  opacity: 0;
  transition: 150ms opacity ease-in;

  &:hover {
    opacity: 1;
  }
`;

export const FooterItem = styled.div`
  cursor: pointer;
`;
