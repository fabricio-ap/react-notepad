import styled from 'styled-components';

type NavItemProps = {
  $selected: boolean;
};

export const Wrapper = styled.nav`
  width: 100%;
  height: auto;
  padding-bottom: 8px;
  grid-area: filter;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const NavList = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const NavItem = styled.li<NavItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.onPrimary};
  background: ${({ $selected, theme }) => $selected && theme.primary};

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    border: none;
    padding: 16px;
  }
`;

export const NavLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
