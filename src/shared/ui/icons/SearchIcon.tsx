import { FC, SVGProps } from 'react';

import { ReactComponent as Icon } from './SearchIcon.svg';

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} width={'18px'} fill={'var(--color-main)'} />;
};
