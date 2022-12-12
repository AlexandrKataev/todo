import { FC, SVGProps } from 'react';

export const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} width={'22px'} fill={'var(--color-header-text)'} viewBox="0 0 32 32">
      <path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z" />
    </svg>
  );
};
