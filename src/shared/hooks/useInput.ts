import { useState, useEffect } from 'react';

export const useInput = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue || '');
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
    setIsChanged(true);
  };

  const clearValue = () => {
    setValue('');
  };

  return { value, isChanged, onChange, clearValue };
};
