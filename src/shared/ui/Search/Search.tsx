import { ChangeEvent, FC } from 'react';

import styles from './Search.module.scss';

import { ReactComponent as SearchIcon } from 'shared/ui/icons/search.svg';
import { ReactComponent as ClearIcon } from 'shared/ui/icons/clear.svg';

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
      <SearchIcon className={styles.icon} />
      {searchValue && <ClearIcon className={styles.clear} onClick={clearSearch} />}
    </div>
  );
};
