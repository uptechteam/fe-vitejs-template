import { useEffect, useState } from 'react';

import { getFromLocalStorage, setToLocalStorage } from '~/utils/localStorage';

export const useStorageState = <S = undefined>(key: string, initial: S) => {
  const [value, setValue] = useState<S>(() => {
    const saved = getFromLocalStorage<S>(key);
    return saved || initial;
  });

  useEffect(() => {
    setToLocalStorage(key, value);
  }, [value]);

  return [value, setValue] as [typeof value, typeof setValue];
};
