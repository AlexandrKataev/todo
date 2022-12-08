import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './NewTaskCard.module.scss';

import { taskService } from 'shared/api/services/taskService';
import { ITask } from 'shared/models/ITask';
import { ItemIcon } from 'shared/ui/icons/ItemIcon';

export const NewTaskCard: FC = () => {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  const onChangeInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };

  const onChangeInputContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(event.target.value);
  };

  const postTask = async () => {
    if (inputTitle && inputContent) {
      await taskService.createTask({ title: inputTitle, content: inputContent } as ITask);
      navigate('/');
    }
  };

  return (
    <>
      <ItemIcon width={'100px'} />
      <input
        className={styles.title}
        value={inputTitle}
        onChange={onChangeInputTitle}
        maxLength={35}
      />
      <textarea
        className={styles.contentArea}
        value={inputContent}
        onChange={onChangeInputContent}
      />
      <button
        onClick={postTask}
        className={inputTitle && inputContent ? styles.save : styles.save_disabled}>
        Save
      </button>
    </>
  );
};
