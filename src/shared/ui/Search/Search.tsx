import { ChangeEvent, FC } from 'react';

import styles from './Search.module.scss';

import { CrossIcon, SearchIcon } from '../icons';

interface SearchProps {
  searchValue: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
}

export const Search: FC<SearchProps> = ({ searchValue, onChangeSearch, clearSearch }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Поиск"
        value={searchValue}
        onChange={onChangeSearch}
      />
      <div className={styles.search_icon}>
        <SearchIcon />
      </div>

      {searchValue && (
        <div className={styles.clear}>
          <CrossIcon onClick={clearSearch} />
        </div>
      )}
    </div>
  );
};
