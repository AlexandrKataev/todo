import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

import { ReactComponent as ThemeIcon } from 'shared/ui/icons/theme.svg';
import { PlusIcon } from 'shared/ui/icons/PlusIcon';

import { useTheme } from 'shared/hooks/useTheme';
import { getTheme, themes } from 'shared/helpers/getTheme';

export const Header: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(getTheme);
  useTheme(theme);

  const onCLickNewTask = () => {
    navigate('task/new');
  };

  return (
    <div className={styles.container}>
      {pathname === '/' ? <div>Searching</div> : <Link to="/">Назад</Link>}
      <div className={styles.icons}>
        <PlusIcon onClick={onCLickNewTask} width={'18px'} fill={'var(--color-header-text)'} />
        <ThemeIcon
          className={styles.theme}
          onClick={() => (theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light))}
        />
      </div>
    </div>
  );
};
