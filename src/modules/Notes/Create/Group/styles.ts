import styled from 'styled-components';

type ColorType = {
  $background: string;
  $border: string;
};

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Actions = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ColorSelector = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  padding: 8px;
  top: 32px;
  left: 0;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Color = styled.div<ColorType>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $background }) => $background};
  border: 1px solid ${({ $border }) => $border};
`;
