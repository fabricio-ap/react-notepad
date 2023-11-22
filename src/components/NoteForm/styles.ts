import styled from 'styled-components';
import { Button } from '../Button';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
`;

export const Actions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
  box-sizing: border-box;
`;

export const Close = styled(Button)`
  align-self: flex-end;
`;
