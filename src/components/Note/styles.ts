import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 12px;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const FooterItem = styled.div`
  cursor: pointer;
`;
