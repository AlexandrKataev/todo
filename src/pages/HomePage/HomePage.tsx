import { FC } from 'react';

import styles from './HomePage.module.scss';

import { Search, TaskList } from 'features';
import { useInput } from 'shared/hooks';

export const HomePage: FC = () => {
  const { value: searchValue, onChange: onChangeSearch, clearValue } = useInput();

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className={styles.container}>
      <Search searchValue={searchValue} onChangeSearch={onChangeSearch} clearSearch={clearValue} />
      <TaskList searchValue={searchValue} />
    </div>
  );
};
