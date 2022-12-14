import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

import { useTheme } from 'shared/hooks/useTheme';
import { ThemeIcon, PlusIcon } from 'shared/ui';

export const Header: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTheme = useTheme();

  const onCLickNewTask = () => {
    navigate('task/new');
  };

  return (
    <div className={styles.container}>
      {pathname === '/' ? <div>Todo</div> : <Link to="/">Назад</Link>}
      <div className={styles.icons}>
        <PlusIcon onClick={onCLickNewTask} />
        <ThemeIcon onClick={handleTheme} />
      </div>
    </div>
  );
};
