import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.scss';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
 
  return (
    <div className={s.container}>
      {pathname === '/home' ? <div>Searching</div> : <Link to="/home">Назад</Link>}
    </div>
  );
};
