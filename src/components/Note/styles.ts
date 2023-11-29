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
  width: 100%;
  max-height: 320px;
  font-size: 12px;
  line-height: 20px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

export const TagWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.secondary};
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
  justify-content: flex-start;
  gap: 8px;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    opacity: 0;
    transition: 150ms opacity ease-in;

    &:hover {
      opacity: 1;
    }
  }
`;

export const FooterItem = styled.div`
  cursor: pointer;
`;
