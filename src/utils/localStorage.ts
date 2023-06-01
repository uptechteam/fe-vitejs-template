export const getFromLocalStorage = <T>(key: string): T | null => {
  try {
    return JSON.parse(localStorage.getItem(key)) as T;
  } catch (e) {
    // Ignore
  }

  return null;
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    // Ignore
  }
};

export const setToLocalStorage = (key: string, data: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    // Ignore
  }
};
