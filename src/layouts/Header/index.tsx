import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as ThemeIcon } from 'shared/ui/icons/theme.svg';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(1);

  const onChangeTheme = () => {
    if (theme === 1) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#00e1b9');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#439eb1');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#ddf0ff');
      setTheme(2);
    } else if (theme === 2) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#0072c5');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#4348b1');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#d0dcf1');
      setTheme(3);
    } else if (theme === 3) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#8be000');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#43b158');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#e1f8dd');
      setTheme(4);
    } else if (theme === 4) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#f1d900');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#b17f43');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#fff9cb');
      setTheme(5);
    } else if (theme === 5) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#f59600');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#b14343');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#f1d0d0');
      setTheme(6);
    } else if (theme === 6) {
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m', '#a900c5');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--m2', '#7243b1');
      document.querySelector<HTMLElement>(':root')?.style.setProperty('--b', '#edd0f1');
      setTheme(1);
    }
  };

  return (
    <div className={s.container}>
      {pathname === '/home' ? <div>Searching</div> : <Link to="/home">Назад</Link>}
      <ThemeIcon className={s.theme} onClick={onChangeTheme} />
    </div>
  );
};
