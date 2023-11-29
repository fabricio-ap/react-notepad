import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Popup = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: 8px;
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    background: ${({ theme }) => theme.background};
    z-index: 0;
    top: -4px;
  }
`;
