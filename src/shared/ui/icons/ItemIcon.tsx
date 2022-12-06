import React, { FC } from 'react';

export const ItemIcon: FC = ({
  height = '37px',
  width = '37px',
  color = 'var(--m)',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 37 37"
      fill={color}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="18.5" cy="18.5" r="18.5" fill={color} />
    </svg>
  );
};
