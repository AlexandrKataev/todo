import { FC, SVGProps } from 'react';

import { ReactComponent as Icon } from './ItemIcon.svg';

export const ItemIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} width={'37px'} fill={'var(--color-main)'} />;
};
