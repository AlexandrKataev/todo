import React from 'react';
import s from './Search.module.scss';
import { ReactComponent as SearchIcon } from 'shared/ui/icons/search.svg';

export const Search: React.FC = () => {
  const context = React.createContext('search');
  return (
    <div className={s.search}>
      <input className={s.input} placeholder="Поиск" />
      <SearchIcon className={s.icon} />
    </div>
  );
};
