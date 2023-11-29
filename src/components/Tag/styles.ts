import styled from 'styled-components';

type WrapperType = {
  $hasClick?: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  cursor: ${({ $hasClick }) => $hasClick && 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  padding: 3px 5px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.secondary};

  &:hover {
    background: ${({ $hasClick, theme }) => $hasClick && theme.hover};
  }
`;

export const Label = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1px;
  letter-spacing: 0.5px;
`;
