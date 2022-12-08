import { FC, SVGProps } from 'react';

export const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      onClick={props.onClick}
      width={props.width || '22px'}
      fill={props.fill || 'var(--color-header-text)'}
      version="1.1"
      viewBox="0 0 32 32">
      <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
    </svg>
  );
};
