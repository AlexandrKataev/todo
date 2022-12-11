import { FC, SVGProps } from 'react';

import { ReactComponent as Icon } from './PlusIcon.svg';

export const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} width={'22px'} fill={'var(--color-header-text)'} />;
};
