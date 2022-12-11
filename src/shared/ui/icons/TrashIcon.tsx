import { FC, SVGProps } from 'react';

import { ReactComponent as Icon } from './TrashIcon.svg';

export const TrashIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} width={'20px'} fill={'var(--color-main)'} />;
};
