import { Tooltip as AntTooltip } from 'antd';
import { ReactNode } from 'react';
import { DarkToken } from '~/types/theme';

interface TooltipProps {
  children: ReactNode;
  title?: string;
}

export function Tooltip({ children, title }: TooltipProps) {
  const style = { color: DarkToken.text, fontSize: '12px' };

  return (
    <AntTooltip
      title={title}
      color={DarkToken.primary}
      overlayInnerStyle={style}
      arrow={false}
      data-testid='tooltip'
    >
      <div>{children}</div>
    </AntTooltip>
  );
}
