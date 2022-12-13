import { FC, SVGProps } from 'react';

export const CalendarIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      fill={'var(--color-header-text)'}
      width={'22px'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M18.5 2H18v-.5A1.5 1.5 0 0 0 16.5 0 1.5 1.5 0 0 0 15 1.5V2H9v-.5A1.5 1.5 0 0 0 7.5 0 1.5 1.5 0 0 0 6 1.5V2h-.5A5.5 5.5 0 0 0 0 7.5v11A5.5 5.5 0 0 0 5.5 24h13a5.5 5.5 0 0 0 5.5-5.5v-11A5.5 5.5 0 0 0 18.5 2Zm0 19h-13A2.5 2.5 0 0 1 3 18.5V10h18v8.5a2.5 2.5 0 0 1-2.5 2.5Z" />
    </svg>
  );
};
