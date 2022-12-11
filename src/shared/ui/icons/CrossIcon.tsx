import { FC, SVGProps } from 'react';

import { ReactComponent as Icon } from './CrossIcon.svg';

export const CrossIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} fill={'var(--color-header-text)'} width={'18px'} />;
};
