import { FC, SVGProps } from 'react';
import { ReactComponent as Icon } from './ThemeIcon.svg';

export const ThemeIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} fill={'var(--color-header-text)'} width={'24px'} />;
};
