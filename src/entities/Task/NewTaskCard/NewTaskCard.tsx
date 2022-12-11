import { FC } from 'react';

import styles from './NewTaskCard.module.scss';

import { ItemIcon } from 'shared/ui';
import { useInput, useQueryCreateTask } from 'shared/hooks';

export const NewTaskCard: FC = () => {
  const { value: inputTitle, onChange: onChangeTitle } = useInput();
  const { value: inputContent, onChange: onChangeContent } = useInput();

  const createTask = useQueryCreateTask(inputTitle, inputContent);

  return (
    <>
      <ItemIcon width={'100px'} />
      <input className={styles.title} value={inputTitle} onChange={onChangeTitle} maxLength={35} />
      <textarea className={styles.contentArea} value={inputContent} onChange={onChangeContent} />
      <button
        onClick={createTask}
        className={inputTitle && inputContent ? styles.save : styles.save_disabled}
      >
        Save
      </button>
    </>
  );
};
