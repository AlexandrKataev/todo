import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

import { ReactComponent as ThemeIcon } from '@icons/theme.svg';

export const Header: FC = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(1);

  const onChangeTheme = () => {
    if (theme === 1) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#00e1b9');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#439eb1');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#ddf0ff');
      setTheme(2);
    } else if (theme === 2) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#0066af');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#4348b1');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#d0d5f1');
      setTheme(3);
    } else if (theme === 3) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#8d8d8d');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#464646');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#e2e2e2');
      setTheme(4);
    } else if (theme === 4) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#464646');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#464646');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#292929');
      setTheme(5);
    } else if (theme === 5) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#f59600');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#b14343');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#fcfada');
      setTheme(6);
    } else if (theme === 6) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#a900c5');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#7243b1');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#edd0f1');
      setTheme(1);
    }
  };

  return (
    <div className={styles.container}>
      {pathname === '/' ? <div>Searching</div> : <Link to="/">Назад</Link>}
      <ThemeIcon className={styles.theme} onClick={onChangeTheme} />
    </div>
  );
};
