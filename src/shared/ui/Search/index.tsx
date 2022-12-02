import React, { ChangeEvent } from 'react';

import s from './Search.module.scss';

import { ReactComponent as SearchIcon } from 'shared/ui/icons/search.svg';

interface SearchProps {
  searchValue: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ searchValue, onChangeSearch }) => {
  return (
    <div className={s.search}>
      <input
        className={s.input}
        placeholder="Поиск"
        value={searchValue}
        onChange={onChangeSearch}
      />
      <SearchIcon className={s.icon} />
    </div>
  );
};
